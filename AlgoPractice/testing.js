var allPathsSourceTarget = function (graph) {
    let target = graph.length - 1;
    let paths = [];
    let firstNode = graph[0];

    function dfs(node, currentPath = []) {
        if (node === []) return;
        // let currentNode = graph[node];
        for (let i = 0; i < node.length; i++) {
            const currentNode = node[i];
            currentPath.push(currentNode);
            let next = graph[currentNode[i]];
            debugger;
            if (currentNode === target) {
                debugger;
                paths.push(currentPath);
                currentPath = [];
                break;
            }
            dfs(next);
        }
    }
    dfs(firstNode);
    return paths;
};

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));

// var allPathsSourceTarget = function (graph) {
//     const paths = [];
//     const childrenNodes = graph[0];
//     for (let i = 0; i < childrenNodes.length; i++) {
//         let currentPath = [0];
//         dfs(currentPath, childrenNodes[i], graph, paths);
//     }
//     return paths;
// };
// function dfs(currentPath, currentNode, graph, paths) {
//     currentPath.push(currentNode);
//     if (currentNode === graph.length - 1) {
//         paths.push([...currentPath]);
//         return;
//     }
//     const nextChildren = graph[currentNode];
//     for (let i = 0; i < nextChildren.length; i++) {
//         const nextNodes = nextChildren[i];
//         dfs(currentPath, nextNodes, graph, paths);
//         currentPath.pop();
//     }
// }
