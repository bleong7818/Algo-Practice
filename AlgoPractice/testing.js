var distributeCandies = function (candyType) {
    let uniqueCandies = [];

    for (let i = 0; i < candyType.length; i++) {
        let candy = candyType[i];
        if (!uniqueCandies.includes(candy)) {
            uniqueCandies.push(candy);
        }
    }
    const candyNum = uniqueCandies.length;
    console.log(uniqueCandies);
    return Math.min((candyType.length / 2), candyNum);
};

let candyType = [1, 1, 2, 2, 3, 3];
// console.log(!candyType.includes(1));
console.log(distributeCandies(candyType));