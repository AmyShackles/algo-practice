const { robotSim } = require("../walkingRobotSimulation.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("robotSim", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: commands = [4,-1,3], obstacles = []
            Output: 25
            */
            const expected = 25;
            const actual = robotSim([4,-1,3],[]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
            Output: 65
            */
            const expected = 65;
            const actual = robotSim([4,-1,4,-2,4],[[2,4]]);
            expect(actual).to.deep.equal(expected);
        });
    });
