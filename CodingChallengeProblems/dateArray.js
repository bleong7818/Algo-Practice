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
    // These preliminary checks are here to account for cases like delim being a falsey values or isAsc not 
    // being a boolean but also not being null or undefined. 

    let qualifiedDates = [];

    for (let i = 0; i < dataArray.length; i++) {
        let potentialDate = dataArray[i];
        // This for loop exists to iterate through all the elements of the intial dataArray to see which elements
        // contain delim or not. If the element does contain delim I separate the pieces of each qualified date
        // into year, month, and day values so that I could create a Date object with them. I then pushed 
        // the newly created Date object into the qualifiedDates array. These Date objects come with a default value of 8am
        // for time because the dataArray objects only have year, month, and day values.
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

    // This section then looks at the isAsc boolean and determines if we ought to return the dateArray values in 
    // either ascending order is isAsc === true, or descending order if isAsc === false. As for time and space
    // complexity, those values will differ depending on the number of elemtents in the dateArray. Assuming this 
    // .sort is being run in V8 in Google's Javascript engine, i.e. Chrome and Node, .sort will have a time 
    // complexity of O(nlog(n)) and a space complexity of O(nlog(n)) if there are 10 or more elements in dateArray
    // because Quick Sort is being used. If there are less than 10 elements in the array, Insertion Sort will be used
    // instead, which has a time complexity of O(n^2) and a space complexity of O(1). .reverse will also be O(n)
    // time complexity and O(1) space complexity.

    // All in all, if isAsc is equivalent to true and there are 10 more elements in the dataArray that include delim, 
    // this function will have a time complexity of O(n) + O(nlog(n)) + O(n), or just O(nlog(n)), and a space 
    // complexity of O(n) + O(nlog(n)) + O(1), or just O(nlog(n)). If isAsc is false and there are 10 more elements 
    // in the dataArray that include delim, the time complexity and space complexity will remain the same, since
    // .reverse does not add more than O(nlog(n)) in terms of either space or time complexity.

    // However, if there are less than 10 elements in the dateArray, then the time complexity for the function changes to
    // O(n^2) due to V8 choosing to run Insertion Sort instead of Quick Sort.
}

function parseAndSortDates(dataArray, delim, isAsc = true) {
    const answerArray = [];

    //formating
    dataArray.forEach(data => {
        if (parseInt(data) !== NaN && data.includes(delim)) {
            let newDate = new Date(data);
            answerArray.push(newDate);
        }
    })

    if (isAsc) return answerArray.sort();
    return answerArray.reverse();
}