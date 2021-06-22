var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let results = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (results[0][0] <= intervals[i][0] && results[0][1] >= intervals[i][1]) continue;
        if (results[0][0] >= intervals[i][0] && results[0][1] <= intervals[i][1]) results.shift();
        results.unshift(intervals[i]);
    }
    return results.length;
};