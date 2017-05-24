/**
 * Created by lxf on 25/04/2017.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * No need to know the height of tree.
 * If the height of left child no less than the right child, enter the left child.
 * Then recurse until touch leaf.
 * How about iteration
 * BFS
 *
 * Beat 79.1%
 */
var findBottomLeftValue = function(root) {
    let nodes = [root];
    let nextLeveNodes = [root];
    if (root.left === null && root.right === null) {
        return root.val;
    }
    while (nextLeveNodes.length > 0) {
        nextLeveNodes = [];
        for (let node of nodes) {
            if (node.left !== null ) {
                nextLeveNodes.push(node.left);
            }
            if (node.right !== null) {
                nextLeveNodes.push(node.right);
            }

        }
        if (nextLeveNodes.length > 0){
            nodes = nextLeveNodes;
        }
    }
    return nodes[0].val;


};