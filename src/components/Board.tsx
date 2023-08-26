import { useEffect, useState } from "react";
import { NodeInterface } from "../utils/specs";
import { BoardClass } from "../entites/BoardClass";
import Node from "./Node";

const Board = () => {
    const boardObject = new BoardClass(5, 5);

    const [board, setBoard] = useState<NodeInterface[][]>([]);

    useEffect(() => {
        setBoard(boardObject.getBoard());
    }, []);

    return (
        <section className="board">
            <button
                onClick={() =>
                    boardObject.search(board, ({ row, col }) => {
                        console.log(row, col);
                        const nodeElement: HTMLElement | null =
                            document.getElementById(`node-${row}-${col}`);

                        if (nodeElement !== null)
                            nodeElement.classList.add("searched");
                    })
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
