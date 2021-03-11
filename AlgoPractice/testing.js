let root = [1, null, 2, 3];

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const preorderTraversal = function (root) {
    const result = [];

    const traversal = (node) => {
        if (node === null) {
            return;
        }

        result.push(node.val);

        traversal(node.left);
        traversal(node.right);
    };

    traversal(root);
    return result;
};

console.log(preorderTraversal(root));