import { NodeInterface } from "../utils/specs";

export const bfs = (
    grid: NodeInterface[][],
    start: NodeInterface,
    end: NodeInterface
): NodeInterface[] | null => {
    const timeline: NodeInterface[] = [];

    const queue: NodeInterface[] = [];
    queue.push(start);

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === undefined) return null;

        current.attr.isSearched = true;
        timeline.push(current);

        if (current === end) {
            return timeline;
        }

        const neighbors = getUnvisitedNeighbors(current, grid);

        for (const neighbor of neighbors) {
            queue.push(neighbor);
        }
    }

    return null;
};

const getUnvisitedNeighbors = (
    current: NodeInterface,
    grid: NodeInterface[][]
): NodeInterface[] => {
    const neighbors: NodeInterface[] = [];
    const { row, col } = current.pos;

    const rowMoves = [-1, 0, 1, 0];
    const colMoves = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
        const newRow = row + rowMoves[i];
        const newCol = col + colMoves[i];

        if (
            newRow >= 0 &&
            newRow < grid.length &&
            newCol >= 0 &&
            newCol < grid[0].length
        ) {
            const neighbor = grid[newRow][newCol];
            if (!neighbor.attr.isSearched) {
                neighbors.push(neighbor);
            }
        }
    }

    return neighbors;
};
