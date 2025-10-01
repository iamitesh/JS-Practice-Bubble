// Graph Interview Questions with 2 Approaches Each

// Question 1: Depth First Search (DFS)
// Approach 1: Recursive DFS
const dfsRecursive = (graph, start, visited = new Set()) => {
    visited.add(start);
    console.log(start);
    
    for (let neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
    return Array.from(visited);
}

// Approach 2: Iterative DFS using Stack
const dfsIterative = (graph, start) => {
    const visited = new Set();
    const stack = [start];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
    return result;
}

// Test DFS
const graph1 = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
    3: [],
    4: [],
    5: []
};
// console.log("DFS Recursive:", dfsRecursive(graph1, 0));
// console.log("DFS Iterative:", dfsIterative(graph1, 0));


// Question 2: Breadth First Search (BFS)
// Approach 1: Queue-based BFS
const bfsQueue = (graph, start) => {
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}

// Approach 2: Level-order BFS
const bfsLevelOrder = (graph, start) => {
    const visited = new Set([start]);
    let currentLevel = [start];
    const result = [];
    
    while (currentLevel.length > 0) {
        const nextLevel = [];
        result.push([...currentLevel]);
        
        for (let node of currentLevel) {
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    nextLevel.push(neighbor);
                }
            }
        }
        currentLevel = nextLevel;
    }
    return result;
}

// console.log("BFS Queue:", bfsQueue(graph1, 0));
// console.log("BFS Level Order:", bfsLevelOrder(graph1, 0));


// Question 3: Detect Cycle in Directed Graph
// Approach 1: DFS with Recursion Stack
const hasCycleDirectedDFS = (graph) => {
    const visited = new Set();
    const recStack = new Set();
    
    const dfs = (node) => {
        visited.add(node);
        recStack.add(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true;
            } else if (recStack.has(neighbor)) {
                return true;
            }
        }
        
        recStack.delete(node);
        return false;
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node)) return true;
        }
    }
    return false;
}

// Approach 2: Color-based Detection (White, Gray, Black)
const hasCycleDirectedColor = (graph) => {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const color = {};
    
    for (let node in graph) {
        color[node] = WHITE;
    }
    
    const dfs = (node) => {
        color[node] = GRAY;
        
        for (let neighbor of graph[node] || []) {
            if (color[neighbor] === GRAY) {
                return true;
            }
            if (color[neighbor] === WHITE && dfs(neighbor)) {
                return true;
            }
        }
        
        color[node] = BLACK;
        return false;
    }
    
    for (let node in graph) {
        if (color[node] === WHITE) {
            if (dfs(node)) return true;
        }
    }
    return false;
}

// Test Cycle Detection
const graphWithCycle = {
    0: [1],
    1: [2],
    2: [0]
};
// console.log("Has Cycle (DFS):", hasCycleDirectedDFS(graphWithCycle));
// console.log("Has Cycle (Color):", hasCycleDirectedColor(graphWithCycle));


// Question 4: Detect Cycle in Undirected Graph
// Approach 1: DFS-based
const hasCycleUndirectedDFS = (graph, n) => {
    const visited = new Set();
    
    const dfs = (node, parent) => {
        visited.add(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node, -1)) return true;
        }
    }
    return false;
}

// Approach 2: Union-Find
const hasCycleUndirectedUnionFind = (edges, n) => {
    const parent = Array.from({ length: n }, (_, i) => i);
    
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX === rootY) return false;
        parent[rootX] = rootY;
        return true;
    }
    
    for (let [u, v] of edges) {
        if (!union(u, v)) return true;
    }
    return false;
}

// console.log("Undirected Cycle (DFS):", hasCycleUndirectedDFS(graph1, 6));
// console.log("Undirected Cycle (Union-Find):", hasCycleUndirectedUnionFind([[0,1], [1,2]], 3));


// Question 5: Shortest Path (Dijkstra's Algorithm)
// Approach 1: Using Priority Queue (Min Heap simulation)
const dijkstraPriorityQueue = (graph, start, end) => {
    const distances = {};
    const visited = new Set();
    const pq = [[0, start]]; // [distance, node]
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [dist, node] = pq.shift();
        
        if (visited.has(node)) continue;
        visited.add(node);
        
        if (node === end) return dist;
        
        for (let [neighbor, weight] of graph[node] || []) {
            const newDist = dist + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.push([newDist, neighbor]);
            }
        }
    }
    return distances[end];
}

// Approach 2: Array-based (simpler but less efficient)
const dijkstraArray = (graph, start, end) => {
    const distances = {};
    const visited = new Set();
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    
    while (visited.size < Object.keys(graph).length) {
        let minNode = null;
        let minDist = Infinity;
        
        for (let node in distances) {
            if (!visited.has(node) && distances[node] < minDist) {
                minNode = node;
                minDist = distances[node];
            }
        }
        
        if (minNode === null) break;
        visited.add(minNode);
        
        if (minNode === end) return distances[end];
        
        for (let [neighbor, weight] of graph[minNode] || []) {
            const newDist = distances[minNode] + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
            }
        }
    }
    return distances[end];
}

// Test Dijkstra
const weightedGraph = {
    'A': [['B', 4], ['C', 2]],
    'B': [['D', 5]],
    'C': [['B', 1], ['D', 8]],
    'D': []
};
// console.log("Dijkstra PQ:", dijkstraPriorityQueue(weightedGraph, 'A', 'D'));
// console.log("Dijkstra Array:", dijkstraArray(weightedGraph, 'A', 'D'));


// Question 6: Topological Sort
// Approach 1: DFS-based
const topologicalSortDFS = (graph) => {
    const visited = new Set();
    const stack = [];
    
    const dfs = (node) => {
        visited.add(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }
    
    return stack.reverse();
}

// Approach 2: Kahn's Algorithm (BFS-based)
const topologicalSortKahn = (graph) => {
    const inDegree = {};
    const queue = [];
    const result = [];
    
    // Initialize in-degrees
    for (let node in graph) {
        inDegree[node] = 0;
    }
    
    // Calculate in-degrees
    for (let node in graph) {
        for (let neighbor of graph[node] || []) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }
    
    // Add nodes with 0 in-degree to queue
    for (let node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (let neighbor of graph[node] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

// Test Topological Sort
const dag = {
    '0': ['1', '2'],
    '1': ['3'],
    '2': ['3'],
    '3': []
};
// console.log("Topological Sort DFS:", topologicalSortDFS(dag));
// console.log("Topological Sort Kahn:", topologicalSortKahn(dag));


// Question 7: Find All Paths between Two Nodes
// Approach 1: DFS with Path Tracking
const findAllPathsDFS = (graph, start, end, path = [], allPaths = []) => {
    path.push(start);
    
    if (start === end) {
        allPaths.push([...path]);
    } else {
        for (let neighbor of graph[start] || []) {
            if (!path.includes(neighbor)) {
                findAllPathsDFS(graph, neighbor, end, path, allPaths);
            }
        }
    }
    
    path.pop();
    return allPaths;
}

// Approach 2: Backtracking with Visited Set
const findAllPathsBacktrack = (graph, start, end) => {
    const allPaths = [];
    const visited = new Set();
    
    const backtrack = (node, path) => {
        if (node === end) {
            allPaths.push([...path]);
            return;
        }
        
        visited.add(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                path.push(neighbor);
                backtrack(neighbor, path);
                path.pop();
            }
        }
        
        visited.delete(node);
    }
    
    backtrack(start, [start]);
    return allPaths;
}

// console.log("All Paths DFS:", findAllPathsDFS(graph1, 0, 4));
// console.log("All Paths Backtrack:", findAllPathsBacktrack(graph1, 0, 4));


// Question 8: Check if Graph is Bipartite
// Approach 1: BFS-based Coloring
const isBipartiteBFS = (graph) => {
    const color = {};
    
    for (let start in graph) {
        if (color[start] !== undefined) continue;
        
        const queue = [start];
        color[start] = 0;
        
        while (queue.length > 0) {
            const node = queue.shift();
            
            for (let neighbor of graph[node] || []) {
                if (color[neighbor] === undefined) {
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false;
                }
            }
        }
    }
    return true;
}

// Approach 2: DFS-based Coloring
const isBipartiteDFS = (graph) => {
    const color = {};
    
    const dfs = (node, c) => {
        color[node] = c;
        
        for (let neighbor of graph[node] || []) {
            if (color[neighbor] === undefined) {
                if (!dfs(neighbor, 1 - c)) return false;
            } else if (color[neighbor] === c) {
                return false;
            }
        }
        return true;
    }
    
    for (let node in graph) {
        if (color[node] === undefined) {
            if (!dfs(node, 0)) return false;
        }
    }
    return true;
}

// Test Bipartite
const bipartiteGraph = {
    0: [1, 3],
    1: [0, 2],
    2: [1, 3],
    3: [0, 2]
};
// console.log("Is Bipartite BFS:", isBipartiteBFS(bipartiteGraph));
// console.log("Is Bipartite DFS:", isBipartiteDFS(bipartiteGraph));


// Question 9: Number of Connected Components
// Approach 1: DFS-based
const countComponentsDFS = (graph) => {
    const visited = new Set();
    let count = 0;
    
    const dfs = (node) => {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
            count++;
        }
    }
    return count;
}

// Approach 2: Union-Find
const countComponentsUnionFind = (n, edges) => {
    const parent = Array.from({ length: n }, (_, i) => i);
    let components = n;
    
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX !== rootY) {
            parent[rootX] = rootY;
            components--;
        }
    }
    
    for (let [u, v] of edges) {
        union(u, v);
    }
    
    return components;
}

// Test Connected Components
const disconnectedGraph = {
    0: [1],
    1: [0],
    2: [3],
    3: [2],
    4: []
};
// console.log("Connected Components DFS:", countComponentsDFS(disconnectedGraph));
// console.log("Connected Components Union-Find:", countComponentsUnionFind(5, [[0,1], [2,3]]));


// Question 10: Clone a Graph
// Approach 1: DFS-based Cloning
class GraphNode {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

const cloneGraphDFS = (node) => {
    if (!node) return null;
    
    const visited = new Map();
    
    const dfs = (node) => {
        if (visited.has(node)) {
            return visited.get(node);
        }
        
        const clone = new GraphNode(node.val);
        visited.set(node, clone);
        
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        
        return clone;
    }
    
    return dfs(node);
}

// Approach 2: BFS-based Cloning
const cloneGraphBFS = (node) => {
    if (!node) return null;
    
    const visited = new Map();
    const queue = [node];
    visited.set(node, new GraphNode(node.val));
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        for (let neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new GraphNode(neighbor.val));
                queue.push(neighbor);
            }
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }
    
    return visited.get(node);
}

// Test Clone Graph
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
node1.neighbors = [node2, node3];
node2.neighbors = [node1, node3];
node3.neighbors = [node1, node2];

// console.log("Clone Graph DFS:", cloneGraphDFS(node1));
// console.log("Clone Graph BFS:", cloneGraphBFS(node1));


console.log("Graph problems loaded successfully!");
