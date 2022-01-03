let array = ['a', 'b', 'c', 'd', 1];

function returnArray(array) {
    return array;
}

function swap(array) {
    // let value0 = array[0];
    // let value1 = array[1];

    for (let i = 0; i < array.length; i++) {
        let current = array[i]; //'c'
        let value0 = array[0]; //'b'
        array[0] = array[i];
        array[i] = value0;
        // [c, a, b, d, 1] => [d, a, b, c, 1] => [1, a, b, c, d];
    }

    return array;
}
//[2, 1], [3, 3] [4, 6], [5, 10], [6, 15]
//nitroboost
//commit
//nitrowin
//yooyoyoyo
// length / 2 * [length - 1];
let small = ['a', 'b', 'c']; //=> [a, c, b], [c, b, a], [b, a, c]

console.log(swap(array));

for (let i = 0; i < array.length; i++) {

}