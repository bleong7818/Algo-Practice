var queryString = function (s, n) {

    let i = 1;

    while (i <= n) {
        let binaryRep = i.toString(2);
        if (!s.includes(binaryRep)) return false;
        i++;
    }
    return true;
};

var queryString = function (s, n) {
    let rep = true;
    let i = 1;

    while (i <= n) {
        let binaryRep = i.toString(2);
        if (!s.includes(binaryRep)) {
            rep = false;
            break;
        }
        i++;
    }
    return rep;
};