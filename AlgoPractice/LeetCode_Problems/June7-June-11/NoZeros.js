var getNoZeroIntegers = function (n) {
    let original = n;

    while (true) {
        n = n - 1;
        const firstInt = n.toString();
        if (firstInt.indexOf("0") === -1) {
            const secondInt = (original - n).toString();
            if (secondInt.indexOf("0") === -1) {
                return ([parseInt(firstInt), parseInt(secondInt)]);
            }
        }
    }
};