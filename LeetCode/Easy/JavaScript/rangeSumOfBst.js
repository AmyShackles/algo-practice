/*
    Source: https://leetcode.com/problems/range-sum-of-bst/
*/

function rangeSumBST (root,low,high) {
    let sum = 0;
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.shift();
        if (node.val < low) {
            node.right && stack.push(node.right);
        } else if (node.val > high) {
            node.left && stack.push(node.left);
        } else {
            sum += node.val;
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
    }
    return sum;
};

module.exports = { rangeSumBST };