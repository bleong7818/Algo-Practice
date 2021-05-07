function unflatten(object) {
    let result = {};
    for (const i in object) {
        let keys = i.split('.');
        keys.reduce(function (newObject, newKey, j) {
            return newObject[newKey] || (newObject[newKey] = isNaN(Number(keys[j + 1])) ?
                (keys.length - 1 === j ? object[i] : {}) : []);
        }, result);
    }
    return result;
}
