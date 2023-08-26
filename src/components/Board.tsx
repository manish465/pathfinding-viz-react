import { useEffect, useState } from "react";
import { BoardNode } from "../interface";
import Node from "./Node";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const Board: React.FC = () => {
    const [grid, setGrid] = useState<BoardNode[][]>([]);

    const createNode = (col: number, row: number): BoardNode => {
        return {
            col,
            row,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };

    const getNewGridWithWallToggled = (
        grid: BoardNode[][],
        row: number,
        col: number
    ): BoardNode[][] => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = { ...node, isWall: !node.isWall };
        newGrid[row][col] = newNode;
        return newGrid;
    };

    const handleMouseEnter = (row: number, col: number): void => {
        setGrid(getNewGridWithWallToggled(grid, row, col));
    };

    useEffect(() => {
        const getInitialGrid = (): BoardNode[][] => {
            const grid: BoardNode[][] = [];

            for (let row = 0; row < 20; row++) {
                const currentRow: BoardNode[] = [];

                for (let col = 0; col < 50; col++) {
                    currentRow.push(createNode(col, row));
                }

                grid.push(currentRow);
            }

            return grid;
        };

        setGrid(getInitialGrid());
    }, []);

    const animateDijkstra = (
        visitedNodesInOrder: BoardNode[],
        nodesInShortestPathOrder: BoardNode[]
    ): void => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const nodeElement: HTMLElement | null = document.getElementById(
                    `node-${node.row}-${node.col}`
                );
                if (nodeElement) nodeElement.className = "node node-visited";
            }, 10 * i);
        }
    };

    const animateShortestPath = (
        nodesInShortestPathOrder: BoardNode[]
    ): void => {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                const nodeElement: HTMLElement | null = document.getElementById(
                    `node-${node.row}-${node.col}`
                );
                if (nodeElement)
                    nodeElement.className = "node node-shortest-path";
            }, 50 * i);
        }
    };

    const visualize = (): void => {
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder =
            getNodesInShortestPathOrder(finishNode);
        if (visitedNodesInOrder !== undefined)
            animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    };

    return (
        <section className="grid">
            <button onClick={() => visualize()}>RUN</button>
            {grid.map((row, rowIdx) => (
                <div className="col" key={rowIdx}>
                    {row.map((node, nodeIdx) => (
                        <Node
                            key={nodeIdx}
                            col={node.col}
                            row={node.row}
                            isFinish={node.isFinish}
                            isStart={node.isStart}
                            isWall={node.isWall}
                            handleMouseEnter={handleMouseEnter}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Board;
