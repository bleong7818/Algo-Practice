var commonChars = function (arr) {
    const res = [];
    const first = arr[0];
    const chrMaps = arr.slice(1).map(
        s => {
            const map = new Map();
            for (let i = 0; i < s.length; i++)
                map.set(s[i], (map.get(s[i]) ?? 0) + 1);
            return map;
        }
    );
    
    return chrMaps;
};

let input = ["bella", "label", "roller"];
console.log(commonChars(input));