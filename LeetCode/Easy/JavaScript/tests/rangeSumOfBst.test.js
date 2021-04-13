const { rangeSumBST } = require("../rangeSumOfBst.js");
const expect = require("chai").expect;

describe.todo = function(title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("rangeSumBST", () => {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = left === undefined ? null : right;
    }
    it("should return the right value for Example 1", () => {
        let node = new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3), new TreeNode(7)),
            new TreeNode(15, new TreeNode(null), new TreeNode(18))
        );
        const expected = 32;
        const actual = rangeSumBST(node, 7, 15);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
            Output: 23
            */
        const node = new TreeNode(
            10,
            new TreeNode(
                5,
                new TreeNode(3, new TreeNode(1), new TreeNode(null)),
                new TreeNode(7, new TreeNode(6))
            ),
            new TreeNode(15, new TreeNode(13), new TreeNode(18))
        );
        const expected = 23;
        const actual = rangeSumBST(
            node,
            6,
            10
        );
        expect(actual).to.deep.equal(expected);
    });
});