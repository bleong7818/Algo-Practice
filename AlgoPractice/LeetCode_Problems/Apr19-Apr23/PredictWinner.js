var PredictTheWinner = function (nums) {
    let firstPlayerScore = getScore(nums, 0, nums.length - 1);
    let totalScore = nums.reduce((a, b) => a + b, 0);

    return firstPlayerScore >= totalScore - firstPlayerScore;
};

function getScore(nums, i, j) {
    if (i === j) {
        return nums[i];
    }

    if (i > j) {
        return 0;
    }

    let score = Math.max(
        nums[i] + Math.min(getScore(nums, i + 2, j), getScore(nums, i + 1, j - 1)), // we have two choices left after second player
        nums[j] + Math.min(getScore(score, i, j - 2), getScore(nums, i + 1, j - 1))
    );

    return score;
}

var PredictTheWinner = function (nums) {
    let player1Score = 0;
    let player2Score = 0;

    let player1Turn = true;

    while (nums.length > 0) {
        let beginning = nums[0];
        let end = nums[nums.length - 1];
        let addedValue = 0;
        if (beginning > end || beginning === end) {
            addedValue = nums.shift();
        }
        else {
            addedValue = nums.pop();
        }
        if (player1Turn) {
            player1Score += addedValue;
            player1Turn = false;
        }
        else {
            player2Score += addedValue;
            player1Turn = true;
        }

    }
    return player1Score >= player2Score;
};