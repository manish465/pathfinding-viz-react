import { NodeInterface } from "../utils/specs";

const Node: React.FC<NodeInterface> = ({ pos, attr }) => {
    const nodeClass = (): string => {
        const classPrefix = "node";

        if (attr.isStart) return classPrefix + " start";
        if (attr.isFinish) return classPrefix + " finish";
        if (attr.isSearched && (!attr.isStart || !attr.isFinish))
            return classPrefix + " searched";
        return classPrefix;
    };

    const classList = nodeClass();

    return <div id={`node-${pos.row}-${pos.col}`} className={classList}></div>;
};

export default Node;
