const fs = require('fs');
const { JSDOM } = require("jsdom");

function getJSFileName(filename) {
    return filename
        .replace(/-(\w)/g, function (match, p1) {
            return p1.toUpperCase();
        })
        .replace(/\s/g, "")
        .replace(/\.html/, "");
}

async function convertToJSON(directoryPath) {
    const dir = await fs.promises.opendir(directoryPath);
    for await (const file of dir) {
        const filename = file.name;
        const jsFileName = getJSFileName(filename);
        const page = fs.readFileSync(`${directoryPath}/${filename}`).toString();
        await scrape(page, jsFileName);
    }
}

async function scrape(page, fileName) {
    const dom = (new JSDOM(page)).window.document;
    const url = dom.querySelector('div[data-key="description"] a').href;
    console.log(url);
    if (dom.querySelector('div[title="JavaScript"]')) {
    const examples = Array.from(dom.querySelectorAll("pre")).map(a => a.textContent.match(/Input: (?<Input>.*?)\sOutput: (?<Output>.*?)\n/)).filter(a => !!a).map(a => a.groups);
    console.log(examples);
    let defs = Array.from(dom.querySelectorAll(".cm-def"));
    const functionName = defs[0].textContent;
    const params = defs.slice(1).map(a => a.textContent);
    await createFile(functionName, fileName, url, params);
    await createTestFile(functionName, fileName, examples);
    } else {
        return;
    }
}

async function createFile(functionName, fileName, url, params) {
    const fileContents = `/*
    Source: https://leetcode.com${url}
*/

function ${functionName} (${params}) {};

module.exports = { ${functionName} };`

    fs.writeFileSync(`./LeetCode/Easy/${fileName}.js`, fileContents, { flag: 'a'})
}

async function createTestFile(functionName, fileName, examples) {
    const todos = `describe.todo("${functionName}", () => {
    ${examples.map(({Input, Output}, index) => {
        const vars = / = /.test(Input);
        let params = vars ? [] : Input;
        if (vars) {
            let arrStack = []
            let inString = false;
            let start = 0
            for (let i = 0; i < Input.length; i++) {
                if (Input[i] === '[') {
                    arrStack.push('[');
                }
                if (Input[i] === ']') {
                    arrStack.pop();
                }
                if (Input[i] === '"') {
                    inString = !inString;
                }
                if (arrStack.length === 0 && !inString && Input[i] === ',') {
                    let param = Input.slice(Input.indexOf("= ", start) + 2, i);
                    params.push(param);
                    start = i;
                }
            }
            params.push(Input.slice(Input.indexOf("= ", start) + 2));
        }

        return `it("should return the right value for Example ${index + 1}", () => {
            /*
            For sanity checking:
            Input: ${Input}
            Output: ${Output}
            */
            const expected = ${Output};
            const actual = ${functionName}(${params});
            expect(actual).to.deep.equal(expected);
        })`}).join(";\n\t")};
    })`
    const fileContents = `const { ${functionName} } = require("../${fileName}.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
${todos};
`
    fs.writeFileSync(`./LeetCode/Easy/tests/${fileName}.test.js`, fileContents, { flag: "a"});
}

convertToJSON("./out");