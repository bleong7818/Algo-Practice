var reverseString = function (s) {
    let newArray = [];

    for (let i = s.length - 1; i >= 0; i--) {
        newArray.push(s[i]);
    }

    return newArray;
};

var reverseString = function (s) {
    let right = s.length - 1;
    let left = 0;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }
    return s;
};