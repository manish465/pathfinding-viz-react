import { NodeInterface } from "../utils/specs";

export class BoardClass {
    private width: number;
    private height: number;
    private nodeStartRow: number = 0;
    private nodeStartCol: number = 0;
    private nodeFinishRow: number = 19;
    private nodeFinishCol: number = 19;

    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private generateNodeData = (row: number, col: number): NodeInterface => {
        return {
            pos: { row, col },
            attr: {
                isStart: row === this.nodeStartRow && col === this.nodeStartCol,
                isFinish:
                    row === this.nodeFinishRow && col === this.nodeFinishCol,
            },
        };
    };

    public getBoard = (): NodeInterface[][] => {
        const board: NodeInterface[][] = [];

        for (let i = 0; i < this.width; i++) {
            const boardRow: NodeInterface[] = [];

            for (let j = 0; j < this.height; j++) {
                boardRow.push(this.generateNodeData(i, j));
            }

            board.push(boardRow);
        }

        return board;
    };
}
