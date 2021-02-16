const { deleteNode } = require("../deleteNodeInALinkedList.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("deleteNode", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: head = [4,5,1,9], node = 5
            Output: [4,1,9]
            */
            const expected = [4,1,9];
            const actual = deleteNode([4,5,1,9],5);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: head = [4,5,1,9], node = 1
            Output: [4,5,9]
            */
            const expected = [4,5,9];
            const actual = deleteNode([4,5,1,9],1);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: head = [1,2,3,4], node = 3
            Output: [1,2,4]
            */
            const expected = [1,2,4];
            const actual = deleteNode([1,2,3,4],3);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: head = [0,1], node = 0
            Output: [1]
            */
            const expected = [1];
            const actual = deleteNode([0,1],0);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: head = [-3,5,-99], node = -3
            Output: [5,-99]
            */
            const expected = [5,-99];
            const actual = deleteNode([-3,5,-99],-3);
            expect(actual).to.deep.equal(expected);
        });
    });
