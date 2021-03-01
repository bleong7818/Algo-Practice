function flattenObject(object) {
    let flattenedObject = {};
    
    for (const key in object) {
        if (Array.isArray(object[key])) {
            for (let i = 0; i < object[key].length; i++) {
                if (object[key][i] === 'object' && object[key][i] !== null) {
                    for (const nestedKey in object[key][i]) {
                        let newKey = [key, i, nestedKey].join('.');
                        flattenedObject[newKey] = object[key][i][nestedKey];
                    }
                }
                else if (Array.isArray(object[key][i])) {
                    for (let j = 0; j < object[key][i].length; i++) {
                        let arrayKey = [key, i, j].join('.');
                        flattenedObject[arrayKey] = object[key][i][j];
                    }
                }
            }
        }
        else if (object[key] === 'object' && object[key] !== null) {
            for (const lessNestedKey in object[key]) {
                let nestedObjectKey = [key, lessNestedKey];
                flattenedObject[nestedObjectKey] = object[key];
            }
        }
        else {
            flattenedObject[key] = object[key];
        }
    }
    return flattenedObject;
}

function unflatten(object) {
    let result = {};
    for (const i in object) {
        let keys = i.split('.');
        keys.reduce(function(newObject, newKey, j) {
            return newObject[newKey] || (newObject[newKey] = isNaN(Number(keys[j + 1])) ? 
            (keys.length - 1 === j ? object[i] : {}) : []);
            }, result);
    }
    return result;
}


// {
//     “items”: [
//         {
//             “name”: “artwork”,
//         “no”: 1,
//     },
// {
//     “name”: “book”,
//     “no”: 2,
//     },
//   ],
// “status”: “ok”,
// “matrix”: [[1, 2, 3], [4, 5, 6]]
// }


// {
//     “name”: “book”,
//     “no”: 2,
//     },
//   ],
// “status”: “ok”,
// “matrix”: [[1, 2, 3], [4, 5, 6]]
// }

// {
//     “items.0.name”: “artwork”,
//     “items.0.no”: 1,
//     “items.1.name”: “book”,
//     “items.1.no”: 2,
//     “status”: “ok”,
//     “matrix.0.0”: 1,
//     “matrix.0.1”: 2,
//     “matrix.0.2”: 3,
//     “matrix.1.0”: 4,
//     “matrix.1.1”: 5,
//     “matrix.1.2”: 6,
// }
