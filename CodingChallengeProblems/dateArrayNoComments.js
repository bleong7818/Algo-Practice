function parseAndSortDates(dataArray, delim, isAsc) {
    if (!delim) {
        delim = '/';
    }
    if (isAsc === null || isAsc === undefined) {
        isAsc = true;
    }
    if (typeof isAsc !== 'boolean') {
        isAsc = true;
    }


    let qualifiedDates = [];

    for (let i = 0; i < dataArray.length; i++) {
        let potentialDate = dataArray[i];

        if (potentialDate.includes(delim)) {
            let dateInfo = potentialDate.split(delim);
            let year = dateInfo[0];
            let month = dateInfo[1] - 1;
            let day = dateInfo[2];
            qualifiedDates.push(new Date(year, month, day));
        }
    }

    if (isAsc === true) {
        return qualifiedDates.sort();
    }
    else {
        return qualifiedDates.sort().reverse();
    }

}

function parseAndSortDates(dataArray, delim, isAsc = true) {
    const answerArray = [];

    dataArray.forEach(data => {
        if (parseInt(data) !== NaN && data.includes(delim)) {
            let newDate = new Date(data);
            answerArray.push(newDate);
        }
    });

    if (isAsc) return answerArray.sort();
    return answerArray.reverse();
}