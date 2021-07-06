var constructMaximumBinaryTree = function (nums) {
    // find max value in array
    // construct tree node using max value
    // slice the array into left and right of max
    // new tree node with val 3
    // newRight = [2, 1] => [1, 2];
    // right = [0, 5]
    // constructLeft(array, left)

    function construct(array) {
        let index = findMax(array);
        let leftSlice = array.slice(0, index);
        let rightSlice = array.slice(index + 1);
        let newest = new TreeNode(array[index]);
        if (leftSlice.length > 0) {
            newest.left = construct(leftSlice);
        }

        if (rightSlice.length > 0) {
            newest.right = construct(rightSlice);
        }

        return newest;
    }

    return construct(nums);
};