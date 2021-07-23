function droppedRequests(requestTime) {
    // Write your code here
    let dropped = 0;
    let perSecond = 0;
    let small;
    let smallIndex;
    for (let i = 0; i < requestTime.length; i++) {
        let request = requestTime[i];
        if (request >= 10) {
            let small = findSmall(request, requestTime);
            let smallIndex = requestTime.indexOf(small);
            //is this defined?
        }
        let twentySlice = requestTime.slice(smallIndex, i);
        if (twentySlice.length > 20) {
            dropped++;
            continue;
        }
        if (i === 1 || requestTime[i] === requestTime[i - 1]) {
            perSecond++;
        }
        else {
            perSecond = 0;
        }
        if (perSecond >= 3) {
            dropped++;
        }
    }

    return dropped;
}

function findSmall(request, requestTime) {
    for (let i = 0; i < requestTime.length; i++) {
        if (requestTime[i] >= (request - 9)) {
            return requestTime;
        }
    }
}

let requests = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11, 11, 11];
console.log(droppedRequests(requests));