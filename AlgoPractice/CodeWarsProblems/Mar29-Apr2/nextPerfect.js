function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (findRoot(sq)) {
        let nextNum = findRoot(sq) + 1;
        return nextNum * nextNum;
    }
    return -1;
}

function findRoot(num) {
    if (num === 1 || num === 2) return true;
    let maybeRoot = 3;
    while (maybeRoot < num / 3) {
        if ((maybeRoot * maybeRoot) === num) {
            return maybeRoot;
        }
        maybeRoot += 1;
    }
    return false;
}

console.log(findRoot(81));