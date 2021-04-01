// function towerBuilder(nFloors) {
//     if (nFloors < 1) return [];
//     if (nFloors === 1) return ["*"];

//     let base = ["*"];

//     while (base.length < nFloors) {
//         let newLevel = base[base.length - 1] + "**";
//         base.push(newLevel);
//     }

//     return base;
// }

console.log(towerBuilder(5));
// console.log(5 * "*");

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

console.log(towerBuilder(5));