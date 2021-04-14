var findDisappearedNumbers = function (nums) {
    let length = nums.length;
    const disappeared = [];
    for (let i = 1; i <= length; i++) {
        if (!nums.includes(i)) {
            disappeared.push(i);
        }
    }
    return disappeared;
};