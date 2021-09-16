// var flatten = function(head) {
//     let output = []; // [1, 2, 3]
//     let parents = []; // [3]
//     function iterate(outputArray, node, parentsArray) {
//         while (node) {
//             output.push(node.val);
//             if (node.child) {
//                 parentsArray.push(node);
//                 iterate(output, node.child, parentsArray);
//             }
//             while (parentsArray.length > 0 && node.next === null) {
//                 let parent = parentsArray.shift();
//                 iterate(outputArray, parent.next, parentsArray);
//             }
//             node = node.next;
//         }
        
//     }
//     iterate(output, head, parents);
//     return output;
// };

var flatten = function (head) {
    if (!head) return head;

    function iterate(node) {
        let lastChild;
        let lastNext;

        if (node.child) {
            lastChild = iterate(node.child);
        }

        if (node.next) {
            lastNext = iterate(node.next);
        }

        if (lastChild) {
            lastChild.next = node.next;
            if (node.next) {
                node.next.prev = lastChild;
            }
            node.next = node.child;
            node.next.prev = node;
            node.child = null;
        }
        return lastNext || lastChild || node;
    }
    iterate(head);
    return head;
};
