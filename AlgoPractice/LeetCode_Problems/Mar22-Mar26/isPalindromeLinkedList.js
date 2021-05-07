var isPalindrome = function (head) {
    let nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    return nums.join('') === nums.reverse().join('');
};