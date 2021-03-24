function countTeams(skills, minPlayers, minLevel, maxLevel) {
    let madeIt = [];
    for (const skill of skills) {
        if (skill >= minLevel && skill <= maxLevel) {
            madeIt.push(skill);
        }
    }
    return madeIt;
}
let players = [12, 4, 6, 13, 5, 10];
console.log(countTeams(players, 0, 4, 10));