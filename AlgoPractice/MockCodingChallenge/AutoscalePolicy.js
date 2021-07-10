function finalInstances(instances, averageUtil) {
    // Write your code here
    for (let i = 0; i < averageUtil.length; i++) {
        if (i > averageUtil.length) {
            return instances;
        }
        let current = averageUtil[i];

        if (current < 25 && instances !== 1) {
            instances = Math.ceil(instances / 2);
            i += 10;
        }
        if (current > 60 && instances * 2 < (2 * Math.pow(10, 8))) {
            instances *= 2;
            i += 10;
        }
    }

    return instances;
}