function counts(teamA, teamB) {
    let goalCount = [];
    teamA.sort((a, b) => a - b);
    for (let i = 0; i < teamB.length; i++) {
        let bGoals = teamB[i];
        if (teamA[teamA.length - 1] < bGoals) {
            goalCount.push(teamA.length);
        } else {
            let bGoalsIndex = teamA.indexOf(bGoals);
            goalCount.push(bGoalsIndex + 1);
        }
    }
    return goalCount;
}

let teamA = [1, 2, 3];
let teamB = [2, 4];

console.log(counts(teamA, teamB));