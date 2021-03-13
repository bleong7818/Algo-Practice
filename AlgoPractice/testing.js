function widestGap(n, start, finish) {
    let spaceHash = {};

    for (let i = 0; i < start.length; i++) {
        let startPos = start[i];
        let endPos = finish[i];
        let between = [];
        if (endPos - startPos > 1) {
            between = Array.from(new Array(endPos - StartPos - 1), (x, i) => i + startPos + 1);
        }

        spaceHash[startPos] = true;
        spaceHash[endPos] = true;
        if (between.length !== 0) {
            for (let n = 0; n < between.length; i++) {
                let current = between[n];
                spaceHash[current] = true;
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        if (!(i in spaceHash)) {
            spaceHash[i] = false;
        }
    }

    let maxGap = 0;
    for (const key in spaceHash) {
        let currentGap = 0;
        if (spaceHash[key] === false) {
            currentGap += 1;
            if (currentGap > maxGap) {
                maxGap = currentGap;
            }
        }
    }
    return maxGap;
}