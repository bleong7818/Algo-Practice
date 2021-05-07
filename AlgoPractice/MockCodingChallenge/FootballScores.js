function counts(teamA, teamB) {
    const fewerGoals = [];

    for (let i = 0; i < teamB.length; i++) {
        const teamBGoals = teamB[i];
        let currentGoals = 0;
        for (let j = 0; j < teamA.length; j++) {
            const teamAGoals = teamA[j];
            if (teamBGoals >= teamAGoals) {
                currentGoals++;
            }
        }
        fewerGoals.push(currentGoals);
    }
    return fewerGoals;
}