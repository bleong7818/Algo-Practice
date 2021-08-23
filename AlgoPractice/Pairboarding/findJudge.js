var findJudge = function (n, trust) {
    //     check 1st position if its N - return false
    //     check that 2nd position is N for all arrays.

    let hash = {};

    for (let i = 1; i <= n; i++) {
        hash[i] = [[], []];
    }

    for (let j = 0; j < trust.length; j++) {
        let mini = trust[j];
        let truster = mini[0];
        let trusted = mini[1];

        hash[truster][0].push(trusted);
        hash[trusted][1].push(truster);
    }

    // let keyArray = Object.keys(hash);
    console.log(hash);
    for (let key in hash) {
        // debugger
        if (hash[key][0].length === 0) {
            // debugger
            if ((n - 1) == hash[key][1].length) {
                return key;
            }
            //                 let newArray = keyArray.slice(0, index) + keyArray.slice(index + 1);
        }
    }
    //yoyoyoyoy

    return -1;
};

console.log(findJudge(3, [[1, 3], [2, 3]]));