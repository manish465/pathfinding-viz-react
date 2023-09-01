import { useEffect, useState } from "react";
import Node from "./Node";
import { BoardClass } from "../entites/BoardClass";

const Board = () => {
    const boardObj = new BoardClass();
    const [board, setBoard] = useState(boardObj.getBoard());

    return (
        <section className="board">
            <button>Search</button>
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
