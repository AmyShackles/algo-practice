const { findRestaurant } = require("../minimumIndexSumOfTwoLists.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("findRestaurant", () => {
    it("should return the right value for Example 1", () => {
            /*
            For sanity checking:
            Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
            Output: ["Shogun"]
            */
            const expected = ["Shogun"];
            const actual = findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 2", () => {
            /*
            For sanity checking:
            Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
            Output: ["Shogun"]
            */
            const expected = ["Shogun"];
            const actual = findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["KFC","Shogun","Burger King"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 3", () => {
            /*
            For sanity checking:
            Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
            Output: ["KFC","Burger King","Tapioca Express","Shogun"]
            */
            const expected = ["KFC","Burger King","Tapioca Express","Shogun"];
            const actual = findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["KFC","Burger King","Tapioca Express","Shogun"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 4", () => {
            /*
            For sanity checking:
            Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
            Output: ["KFC","Burger King","Tapioca Express","Shogun"]
            */
            const expected = ["KFC","Burger King","Tapioca Express","Shogun"];
            const actual = findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["KNN","KFC","Burger King","Tapioca Express","Shogun"]);
            expect(actual).to.deep.equal(expected);
        });
	it("should return the right value for Example 5", () => {
            /*
            For sanity checking:
            Input: list1 = ["KFC"], list2 = ["KFC"]
            Output: ["KFC"]
            */
            const expected = ["KFC"];
            const actual = findRestaurant(["KFC"],["KFC"]);
            expect(actual).to.deep.equal(expected);
        });
    });
