var findRestaurant = function (list1, list2) {
    let list1map = new Map();
    const placesToGo = [];

    for (let i = 0; i < list1.length; i++) {
        list1map.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if (list1map.has(list2[j])) {
            list1map.set(list2[j], list1map.get(list2[j]) + j);
        }
    }
    const mapSort = new Map([...list1map.entries()].sort((a, b) => a[1] - b[1]));
    let currentIndexSum = Infinity;
    for (const [place, indexSum] of mapSort) {
        if (list1.includes(place) && list2.includes(place)) {
            if (currentIndexSum >= indexSum) {
                placesToGo.push(place);
                currentIndexSum = indexSum;
            }

        }
    }
    return placesToGo;
};