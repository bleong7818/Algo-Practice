function playlist(songs) {
    // Write your code here
    songs.sort((a, b) => a - b);
    let i = 0;
    let j = songs.length - 1;
    let n = 0;

    while (i < j) {
        const pairLength = songs[i] + songs[j];

        if (pairLength % 60 === 1) {
            n += 1;
            i++;
            j--;
        }
        else if (pairLength % 60 > 1) {
            i++;
        }
        else if (pairLength % 60 < 1) {
            j--;
        }
    }
    return n;
}