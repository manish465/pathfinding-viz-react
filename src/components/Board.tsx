import { useEffect, useState } from "react";
import { NodeInterface } from "../utils/specs";
import { BoardClass } from "../entites/BoardClass";
import Node from "./Node";

const Board = () => {
    const boardObject = new BoardClass(20, 20);

    const [board, setBoard] = useState<NodeInterface[][]>([]);

    useEffect(() => {
        setBoard(boardObject.getBoard());
    }, []);

    useEffect(() => {
        console.log(board);
    }, [board]);

    return (
        <section className="board">
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
