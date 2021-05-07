//time = O(v + e) where v = vertices and e = edges (branches)
//space = O(v) length of returned array has a length of v.

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        // Write your code here.
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}

// Do not edit the line below.
exports.Node = Node;
