function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = { [currentBestTeam]: 0 };

    for (let i = 0; i < competitions.length; i++) {
        const result = results[i];
        const [homeTeam, awayTeam] = competitions[i];

        const winningTeam = result === 1 ? homeTeam : awayTeam;

        updateScores(winningTeam, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam;
}

function updateScores(winningTeam, scores) {
    if (!(winningTeam in scores)) scores[winningTeam] = 0;

    scores[winningTeam] += 3;
}