import { NodeInterface } from "../utils/specs";

const Node: React.FC<NodeInterface> = ({ pos, attr }) => {
    const nodeClass = (): string => {
        const classPrefix = "node";

        if (attr.isStart) return classPrefix + " start";
        if (attr.isFinish) return classPrefix + " finish";
        return classPrefix;
    };

    const classList = nodeClass();

    return <div id={`node-${pos.row}-${pos.col}`} className={classList}></div>;
};

export default Node;
