function jumps(flagHeight, bigJump) {
    if (bigJump === 1) return flagHeight;
    if (flagHeight % bigJump === 0) return flagHeight / bigJump;
    let numSmall = flagHeight % bigJump;
    let numBig = flagHeight / bigJump;
    return Math.floor(numSmall + numBig);
}