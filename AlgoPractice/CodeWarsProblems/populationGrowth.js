function nbYear(p0, percent, aug, p) {
    // your code
    if (p0 >= p) return 0;
    let percentInc = percent / 100;
    let years = 1;
    while (p0 < p) {
        let newInhabitants = p0 + p0 * percentInc + aug;
        if (newInhabitants >= p) {
            return years;
        }
        years += 1;
        p0 = newInhabitants;
    }
}