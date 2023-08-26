import { useEffect, useState } from "react";
import { NodeInterface, PosInterface } from "../utils/specs";
import { BoardClass } from "../entites/BoardClass";
import Node from "./Node";

const Board = () => {
    const boardObject = new BoardClass(10, 10);

    const [board, setBoard] = useState<NodeInterface[][]>([]);

    const handleBoardChangeAction = ({ row, col }: PosInterface): void => {
        const nodeElement: HTMLElement | null = document.getElementById(
            `node-${row}-${col}`
        );

        if (nodeElement !== null) nodeElement.classList.add("searched");
    };

    useEffect(() => {
        setBoard(boardObject.getBoard());
    }, []);

    return (
        <section className="board">
            <button
                onClick={() =>
                    boardObject.search(board, handleBoardChangeAction)
                }
            >
                Search
            </button>
            {board.map((row, rowIdx) => (
                <div className="row" key={rowIdx}>
                    {row.map((node, colIdx) => (
                        <Node key={colIdx} pos={node.pos} attr={node.attr} />
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Board;
