var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    if (new Set(s).size !== new Set(t).size) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(t[i]) && map.get(t[i]) !== s[i]) return false;
        map.set(t[i], s[i]);
    }
    return true;
};