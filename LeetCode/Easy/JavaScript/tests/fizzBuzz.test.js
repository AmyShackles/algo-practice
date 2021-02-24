const { fizzBuzz } = require("../fizzBuzz.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("fizzBuzz", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            n = 15,

            Return:
            [
                "1",
                "2",
                "Fizz",
                "4",
                "Buzz",
                "Fizz",
                "7",
                "8",
                "Fizz",
                "Buzz",
                "11",
                "Fizz",
                "13",
                "14",
                "FizzBuzz"
            ]
        */
        const expected = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz"
        ];
        const actual = fizzBuzz(15);
        expect(actual).to.deep.equal(expected);
    })
});
