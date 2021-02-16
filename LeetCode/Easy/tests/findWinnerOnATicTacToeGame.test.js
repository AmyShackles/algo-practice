const { tictactoe } = require("../findWinnerOnATicTacToeGame.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("tictactoe", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
            Output: "A"
            */
            const expected = "A";
            const actual = tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
            Output: "B"
            */
            const expected = "B";
            const actual = tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
            Output: "Draw"
            */
            const expected = "Draw";
            const actual = tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: moves = [[0,0],[1,1]]
            Output: "Pending"
            */
            const expected = "Pending";
            const actual = tictactoe([[0,0],[1,1]]);
            expect(actual).to.deep.equal(expected);
        });
    });
