const { increasingBST } = require("../increasingOrderSearchTree.js");
const expect = require("chai").expect;

describe.todo = function (title, callback) {
    return it.skip("SKIPPED " + title, callback);
};
describe.todo("increasingBST", () => {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    it("should return the right value for Example 1", () => {
        /*
            For sanity checking:
            Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
            Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
            */
        const root = new TreeNode(
            5,
            new TreeNode(
                3,
                new TreeNode(2, new TreeNode(1), null),
                new TreeNode(4, null, null)
            ),
            new TreeNode(
                6,
                null,
                new TreeNode(8, new TreeNode(7), new TreeNode(9))
            )
        );
        const expected = new TreeNode(
            1,
            null,
            new TreeNode(
                2,
                null,
                new TreeNode(
                    3,
                    null,
                    new TreeNode(
                        4,
                        null,
                        new TreeNode(
                            5,
                            null,
                            new TreeNode(
                                6,
                                null,
                                new TreeNode(
                                    7,
                                    null,
                                    new TreeNode(8, null, new TreeNode(9))
                                )
                            )
                        )
                    )
                )
            )
        );
        const actual = increasingBST(root);
        expect(actual).to.deep.equal(expected);
    });
    it("should return the right value for Example 2", () => {
        /*
            For sanity checking:
            Input: root = [5,1,7]
            Output: [1,null,5,null,7]
            */
        const root = new TreeNode(5, new TreeNode(1), new TreeNode(7));
        const expected = new TreeNode(
            1,
            null,
            new TreeNode(5, null, new TreeNode(7))
        );
        const actual = increasingBST(root);
        expect(actual).to.deep.equal(expected);
    });
});
