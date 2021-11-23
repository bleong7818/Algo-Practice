function playlist(songs) {
    let minuteSongs = 0;

    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];
        for (let j = i + 1; j < songs.length; j++) {
            let otherSong = songs[j];
            if ((song + otherSong) % 60 === 0) {
                minuteSongs++;
            }
        }
    }
    return minuteSongs;
}
//yoyoyoy
//yoyoyoyo