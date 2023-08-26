import { BoardNode } from "../interface";

export const dijkstra = (
    grid: BoardNode[][],
    startNode: BoardNode,
    finishNode: BoardNode
): void | BoardNode[] => {
    const visitedNodesInOrder: BoardNode[] = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while (unvisitedNodes.length !== 0) {
        sortNodesByDistance(unvisitedNodes);

        const closestNode = unvisitedNodes.shift();
        if (closestNode === undefined) continue;

        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity) return visitedNodesInOrder;

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if (closestNode === finishNode) return visitedNodesInOrder;

        updateUnvisitedNeighbors(closestNode, grid);
    }
};

const getAllNodes = (grid: BoardNode[][]): BoardNode[] => {
    const nodes = [];

    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }

    return nodes;
};

const sortNodesByDistance = (unvisitedNodes: BoardNode[]): void => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateUnvisitedNeighbors = (
    node: BoardNode,
    grid: BoardNode[][]
): void => {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
};

const getUnvisitedNeighbors = (
    node: BoardNode,
    grid: BoardNode[][]
): BoardNode[] => {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
};

export const getNodesInShortestPathOrder = (
    finishNode: BoardNode
): BoardNode[] => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
};
