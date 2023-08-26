interface PosInterface {
    row: number;
    col: number;
}

interface Attribute {
    isStart: boolean;
    isFinish: boolean;
}

export interface NodeInterface {
    pos: PosInterface;
    attr: Attribute;
}
