class UnionFind {
  constructor(size) {
    this.parent = Array(size + 1)
      .fill(0)
      .map((_, i) => i);
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]);
    }
    return this.parent[u];
  }

  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);
    if (rootU === rootV) return false;
    this.parent[rootV] = rootU;
    return true;
  }
}

function getMinimumCostMST(
  graph_nodes,
  graph_from,
  graph_to,
  graph_weight,
  source,
  destination
) {
  const edges = [];

  // Step 1: Collect all edges with weights
  for (let i = 0; i < graph_from.length; i++) {
    edges.push({
      from: graph_from[i],
      to: graph_to[i],
      weight: graph_weight[i],
    });
  }

  // Step 2: Sort edges by weight (Kruskal's requirement)
  edges.sort((a, b) => a.weight - b.weight);

  // Step 3: Initialize Union-Find
  const uf = new UnionFind(graph_nodes);
  const mst = new Map(); // adjacency list to build MST

  let totalCost = 0;

  for (const edge of edges) {
    console.log("xx edge", edge);
    if (uf.union(edge.from, edge.to)) {
      console.log("xx union", edge);
      // Add edge to MST graph (undirected)
      if (!mst.has(edge.from)) {
        mst.set(edge.from, []);
      }
      if (!mst.has(edge.to)) mst.set(edge.to, []);
      mst.get(edge.from).push({ node: edge.to, weight: edge.weight });
      mst.get(edge.to).push({ node: edge.from, weight: edge.weight });
      totalCost += edge.weight;
    } else console.log("xx union false", edge);
  }

  // Step 4: Check if source and destination are connected in MST
  const visited = new Set();
  let found = false;

  function dfs(node) {
    if (node === destination) {
      found = true;
      return;
    }
    visited.add(node);
    for (const neighbor of mst.get(node) || []) {
      if (!visited.has(neighbor.node)) {
        dfs(neighbor.node);
      }
    }
  }

  dfs(source);

  return found ? totalCost : -1;
}

const graph_nodes = 3;
/*   */ const graph_from = [1, 2, 1];
/*     */ const graph_to = [2, 3, 3];
/* */ const graph_weight = [5, 3, 4];
const source = 1;
const destination = 3;

const result = getMinimumCostMST(
  graph_nodes,
  graph_from,
  graph_to,
  graph_weight,
  source,
  destination
);
console.log("xx Minimum MST cost between source and destination:", result); // Expected: 7
