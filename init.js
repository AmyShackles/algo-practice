const fs = require("fs");

async function createFile(fileName, url) {
    const fileContents = `/*
    Source: ${url}
*/

function ${fileName} (${params}) {};

module.exports = { ${fileName} };`;
    fs.writeFileSync(`./LeetCode/Easy/${fileName}.js`, fileContents, {
        flag: "a",
    });
}

async function createTestFile(fileName, ...params) {
    const fileContents = `const { ${fileName} } = require("../${fileName}.js");
const expect = require("chai").expect;
    
describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
describe.todo("${fileName}", () => {
    it("should return the right value for Example 1", () => {
        const expected = ;
        const actual = ${fileName}();
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        const expected = ;
        const actual = ${fileName}();
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 3", () => {
        const expected = ;
        const actual = ${fileName}();
        expect(actual).to.deep.equal(expected);
    });
});
`;
    fs.writeFileSync(
        `./LeetCode/Easy/tests/${fileName}.test.js`,
        fileContents,
        { flag: "a" }
    );
}

const commandLineArguments = process.argv.slice(2);
const fileName = commandLineArguments[0];
const url = commandLineArguments[1];
const params = commandLineArguments.slice(2);

createFile(fileName, url);
createTestFile(fileName, params);
