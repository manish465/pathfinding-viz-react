import { BoardNodeComponet } from "../interface";

const Node: React.FC<BoardNodeComponet> = ({
    col,
    row,
    isStart,
    isFinish,
    isWall,
    handleMouseEnter,
}) => {
    const extraClassName = isFinish
        ? "finish"
        : isStart
        ? "start"
        : isWall
        ? "wall"
        : "";

    return (
        <div
            id={`node-${row}-${col}`}
            className={`node ${extraClassName}`}
            onMouseEnter={() => handleMouseEnter(row, col)}
        />
    );
};

export default Node;
