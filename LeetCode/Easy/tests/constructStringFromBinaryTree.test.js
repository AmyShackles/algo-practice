const { tree2str } = require("../constructStringFromBinaryTree.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("tree2str", () => {
    it("should return the right value for Example 1", () => {
        /*
            Sanity check:
            Input: Binary tree: [1,2,3,4]
                1
              /   \
             2     3
            /    
           4     

            Output: "1(2(4))(3)"
        */
       const expected = "1(2(4))(3)";
       const actual = tree2str([1,2,3,4]);
       expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            Sanity check:
            Input: Binary tree: [1,2,3,null,4]
                1
              /   \
             2     3
              \  
               4 

            Output: "1(2()(4))(3)"
        */
       const expected = "1(2()(4))(3)";
       const actual = tree2str([1,2,3,null,4]);
       expect(actual).to.deep.equal(expected);
    })
});
