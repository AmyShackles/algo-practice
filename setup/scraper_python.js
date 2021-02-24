const fs = require("fs");
const { JSDOM } = require("jsdom");

function getPythonFileName(filename) {
    return filename
        .replace(/-/g, "")
        .replace(/\s/g, "")
        .replace(/\.html/, "");
}

async function convertToJSON(directoryPath) {
    const dir = await fs.promises.opendir(directoryPath);
    for await (const file of dir) {
        const filename = file.name;
        const pythonFileName = getPythonFileName(filename);
        const page = fs.readFileSync(`${directoryPath}/${filename}`).toString();
        await scrape(page, pythonFileName);
    }
}

async function scrape(page, fileName) {
    const dom = new JSDOM(page).window.document;
    const url = dom.querySelector('div[data-key="description"] a').href;
    console.log(url);
    if (dom.querySelector(`div[title="Python3"]`)) {
        const examples = Array.from(dom.querySelectorAll("pre"))
            .map((a) =>
                a.textContent.match(
                    /Input: (?<Input>.*?)\sOutput: (?<Output>.*?)\n/
                )
            )
            .filter((a) => !!a)
            .map((a) => a.groups);
        const allDefs = [
            ...dom.querySelectorAll('span[role="presentation"]'),
        ].map((a) => a.textContent);
        const defs = allDefs.slice(allDefs.findIndex((a) => a.match(/^class/)));
        const functionSignature = Array.from(
            dom.querySelectorAll('span[role="presentation"]')
        )
            .map((a) => a.textContent.trim())
            .filter((a) => a.match(/\w+/))
            .join("\n\t");
        const packageName = defs[0].match(/class (.*):/)[1];
        const testName = defs[1].match(/def (.*?)\(/)[1];
        // await createFile(functionSignature, fileName, url);
        await createTestFile(packageName, testName, fileName, examples);
    } else {
        return;
    }
}

async function createFile(functionSignature, fileName, url) {
    const fileContents = `# Source: https://leetcode.com${url}

${functionSignature}\n\t\tpass`;

    fs.writeFileSync(`../LeetCode/Easy/Python3/${fileName}.py`, fileContents, {
        flag: "a",
    });
}

async function createTestFile(packageName, testName, fileName, examples) {
    const todos = examples
        .map(({ Input, Output }, index) => {
            const vars = / = /.test(Input);
            let params = vars ? [] : Input;
            if (vars) {
                let arrStack = [];
                let inString = false;
                let start = 0;
                for (let i = 0; i < Input.length; i++) {
                    if (Input[i] === "[") {
                        arrStack.push("[");
                    }
                    if (Input[i] === "]") {
                        arrStack.pop();
                    }
                    if (Input[i] === '"') {
                        inString = !inString;
                    }
                    if (
                        arrStack.length === 0 &&
                        !inString &&
                        Input[i] === ","
                    ) {
                        let param = Input.slice(
                            Input.indexOf("= ", start) + 2,
                            i
                        );
                        params.push(param);
                        start = i;
                    }
                }
                params.push(Input.slice(Input.indexOf("= ", start) + 2));
            }

            return `def test_${index + 1}(self):
        # For sanity checking:
        # Input: ${Input}
        # Output: ${Output}

        self.assertEqual(${packageName}.${testName}(${params}), ${Output})`;
        })
        .join("\n\n    ");

    const fileContents = `import unittest

from Python3.${fileName} import ${packageName}

class Test${testName}(unittest.TestCase):
    def setUp(self):
        pass
    
    def tearDown(self):
        pass

    ${todos}

if __name__ == '__main__':
    unittest.main()
`;
    fs.writeFileSync(
        `../LeetCode/Easy/Python3/tests/test_${fileName}.py`,
        fileContents,
        { flag: "a" }
    );
}

convertToJSON("./out");
