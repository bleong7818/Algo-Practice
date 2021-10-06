var maxArea = function (height) {
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        let height1 = height[i];
        for (let j = i + 1; j < height.length; j++) {
            let height2 = height[j];
            let smaller = Math.min(height1, height2);
            let distance = j - i;
            const currentArea = distance * smaller;
            if (currentArea > max) {
                max = currentArea;
            }
        }
    }
    return max;
};
// better version
var maxArea = function (height) {
    if (!height.length) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    let currentMax = 0;

    while (left < right) {
        currentMax = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentMax);

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
};