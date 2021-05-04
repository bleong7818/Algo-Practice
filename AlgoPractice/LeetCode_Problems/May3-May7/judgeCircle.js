var judgeCircle = function (moves) {
    let xAxis = 0;
    let yAxis = 0;
    let pos = [xAxis, yAxis];

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        if (move === "R") {
            xAxis++;
        }
        if (move === "L") {
            xAxis--;
        }
        if (move === "U") {
            yAxis++;
        }
        if (move === "D") {
            yAxis--;
        }
    }
    return (xAxis === 0 && yAxis === 0);
};