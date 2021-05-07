var connect = function (root) {
    if (root === null) return root;
    let queue = [root]; //[4,5,7]
    while (queue.length > 0) {
        let n = queue.length; //3
        for (let i = 0; i < n; i++) {
            let node = queue.shift(); //3
            node.next = i === n - 1 ? null : queue[0];
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
};