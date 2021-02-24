function playlist(songs) {
    songs.sort((a, b) => a - b);
    let i = 0;
    let j = songs.length - 1;
    let n = 0;

    while (i < j) {
        const pairLength = songs[i] + songs[j];

        if (pairLength % 60 === 0) {
            n += 1;
            i--;
            j--;
        }
        else if (pairLength % 60 <= 30) {
            j--;
        }
        else if (pairLength % 60 > 30) {
            i++;
        }
    }
    return n;
}

console.log(playlist([90, 10, 50, 30, 4]));