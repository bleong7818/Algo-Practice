function numPlayers(k, scores) {
    // Write your code here
    let ranks = [];
    scores.sort();
    // console.log(scores);
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] !== scores[i - 1]) {
            ranks.push(i + 1);
        }
        else {
            ranks.push(ranks[ranks.length - 1]);
        }
    }

    let count = 0;
    for (let j = 0; j < ranks.length; j++) {
        if (ranks[j] <= k) count++;
    }
    console.log(ranks);
    // console.log(scores.sort());
    return count;
}

let scores = [5, 2, 2, 3, 4, 5];
console.log(scores.indexOf(2));
// console.log(numPlayers(4, scores));
