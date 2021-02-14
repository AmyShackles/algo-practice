const { numberOfSteps } = require("../numberOfSteps.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED: " + title, callback);
};
