class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
    if (tree === null) {
        return new TreeInfo(0, 0);
    }

    const leftTreeInfo = getTreeInfo(tree.left);
    const rightTreeInfo = getTreeInfo(tree.right);

    const longestPath = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameter = Math.max(leftTreeInfo.diamater, rightTreeInfo.diameter);
    const currentDiameter = Math.max(longestPath, maxDiameter);
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight);
}


class TreeInfo {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}

