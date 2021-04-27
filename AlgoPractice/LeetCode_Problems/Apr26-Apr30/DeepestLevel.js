var maxDepth = function (root) {
    if (!root) return 0;
    let queue = [root];
    let layers = 0;
    let node = root;
    while (queue.length) {
        let curLevelLen = queue.length;
        for (var i = 0; i < curLevelLen; i++) {
            node = queue.shift();
            for (const child of node.children) {
                queue.push(child);
            }
        }
        layers++;
    }
    return layers;
};