// 3. Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6
let stack = [1, 2, 3, 4]; //Last in, first out
let queue = [3, 4, 5, 6]; //first in, first out
function triangleMaker(triangleRows) {

    let triangle = [[1]];

    for (let i = 1; i < triangleRows; i++) {
        let row = [];
        let last = triangle[i - 1];
        let lastValue = last[last.length - 1]; 

        for (let j = 0; j <= last.length; j++) {
            row.push(lastValue + 1); 
            lastValue++; 
        }
        triangle.push(row); 
    }
    return triangle;
}

console.log(triangleMaker(3));
// [1]
// 2 3

// class Shape {
//     constructor(area)
// }

// class Triangle {
//     constructor(height, width)
// }