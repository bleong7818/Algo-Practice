function counts(teamA, teamB) {
    // Write your code here
    let bEquals = [];

    for (let i = 0; i < teamB.length; i++) {
        let bGoal = teamB[i];
        let qualifiers = 0;
        for (let j = 0; j < teamA.length; j++) {
            let aGoal = teamA[j];

            if (aGoal <= bGoal) {
                qualifiers++;
            }
        }
        bEquals.push(qualifiers);
    }
    return bEquals;
}