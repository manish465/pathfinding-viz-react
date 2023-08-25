import { useEffect, useState } from "react";
import { BoardNode } from "../interface";
import Node from "./Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const Board: React.FC = () => {
    const [grid, setGrid] = useState<BoardNode[][]>([]);
    const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

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

    useEffect(() => {
        setGrid(getInitialGrid());
    }, []);

    return (
        <section className="grid">
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
                            mouseIsPressed={mouseIsPressed}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Board;
