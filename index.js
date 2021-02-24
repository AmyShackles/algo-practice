const fs = require("fs");
const path = require("path");
const Mocha = require("mocha");
const mocha = new Mocha({
    reporter: "list",
});
const testDir = "./LeetCode/Easy/JavaScript/tests";

fs.readdirSync(testDir)
    .filter(function (file) {
        return path.extname(file) === ".js";
    })
    .forEach(function (file) {
        mocha.addFile(path.join(testDir, file));
    });

mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0;
});
