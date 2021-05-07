var dailyTemperatures = function (T) {
    let daysWait = [];

    for (let i = 0; i < T.length; i++) {
        let temp = T[i];
        let waitTillWarm = 0;
        for (let j = i + 1; j < T.length; j++) {
            let jTemp = T[j];
            if (temp < jTemp) {
                waitTillWarm = j - i;
                break;
            }
        }
        daysWait.push(waitTillWarm);
    }
    return daysWait;
};