// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.



// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".



// Example 2:

// Input: s = "azxxzy"
// Output: "ay"


var removeDuplicates = function (str) {
    let string = "";
    let isDuplicate = false;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const nextChar = str[i + 1];
        if (char === nextChar) {
            isDuplicate = true;
            i += 1;
        }
        else {
            string += char;
        }
    }
    if (isDuplicate) {
        string = removeDuplicates(string);
    }
    return string;
}

console.log(removeDuplicates("azxxzy"))
// "ay"

"abcdefggfedcba"
12 + 10 + 8 + 6 + 4 + 2

n * n / 2

n ^ 2




// // Given an integer array nums of unique elements, return all possible subsets (the power set).

// // The solution set must not contain duplicate subsets. Return the solution in any order.

// // p1    p2
// //[1, 2, 3,].     [1,2,3,4].   => [1,4], [1,2,4], [1,3,4] [1,3]

// //[nums[p1], nums[p3]]
// // Example 1:

// // Input: nums = [1,2,3]
// // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


// // Example 2:

// // Input: nums = [0]
// // Output: [[],[0]]


// // Constraints:

// // 1 <= nums.length <= 10
// // -10 <= nums[i] <= 10
// // All the numbers of nums are unique.


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function(nums) {
//   let subsets = [];

//   let currentSubset = [];

//   const dfs = (index) => {
//     console.log(currentSubset); 
//     if (index >= nums.length) {
//       subsets.push(currentSubset.slice());
//       return;
//     }
//       //element is included in subset 
//     currentSubset.push(nums[index]);
//     dfs(index + 1);
//       //element is not included in subset
//     currentSubset.pop();
//     dfs(index + 1);
//   }
//   dfs(0);
//   return subsets;
// };

// console.log(subsets([1, 2, 3]));