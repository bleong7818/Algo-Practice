var pathSum = function (root, targetSum) {
    let results = [];
    function search(node, parents = [], parentsSum = 0) {
        if (!node) return;
        const currSum = node.val + parentsSum;
        const currArr = [...parents, node.val];

        if (!node.right && !node.left && currSum === targetSum) {
            results.push(currArr);
        }
        else {
            if (node.right) search(node.right, currArr, currSum);
            if (node.left) search(node.left, currArr, currSum);
        }
    }

    search(root);
    return results;
};