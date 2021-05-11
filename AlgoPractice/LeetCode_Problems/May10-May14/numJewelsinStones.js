var numJewelsInStones = function (jewels, stones) {
    let gems = 0;

    for (let i = 0; i < stones.length; i++) {
        let stone = stones[i];
        if (jewels.includes(stone)) {
            gems++;
        }
    }
    return gems;
};