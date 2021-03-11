// function isAnagram(stringA, stringB) {
//     Let newHash = {};

//     For(let i = 0; i < stringA; i++) {
//         If(stringA[i] in newHash) {
//             newHash[stringA[i]] += 1;
//         }
//         else {
//             newHash[stringA[i]] = 1;
//         }
//     }

//     For(let j = 0; i < stringB; j++) {
//         If(stringB[j] in newHash) {
//             newHash[stringB[i]] -= 1;
//         }
//     }

//     For(const key of newHash) {
//         If(newHash[key]] !== 0) {
//             Return false;
//         }
//     }
//     Return true;
// }
