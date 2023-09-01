import { useState } from "react";
import Node from "./Node";
import { BoardClass } from "../entites/BoardClass";
import { NodeInterface } from "../utils/specs";

const Board = () => {
    const boardObj = new BoardClass(20, 20);
    const [board, setBoard] = useState<NodeInterface[][]>(boardObj.getBoard());

    return (
        <section className="board" onClick={() => boardObj.search(board)}>
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
