import { BoardNodeComponet } from "../interface";

const Node: React.FC<BoardNodeComponet> = ({
    col,
    row,
    isStart,
    isFinish,
    isWall,
    mouseIsPressed,
}) => {
    const extraClassName = isFinish
        ? "node-finish"
        : isStart
        ? "node-start"
        : isWall
        ? "node-wall"
        : "";

    return (
        <div id={`node-${row}-${col}`} className={`node ${extraClassName}`} />
    );
};

export default Node;
