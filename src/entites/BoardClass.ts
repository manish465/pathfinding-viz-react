import { bfs } from "../algorithm/bfs";
import { NodeInterface, PosInterface } from "../utils/specs";

export class BoardClass {
    private width: number;
    private height: number;
    private nodeStartRow: number = 0;
    private nodeStartCol: number = 0;
    private nodeFinishRow: number = 4;
    private nodeFinishCol: number = 4;

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
                isSearched: false,
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

    public search = (
        board: NodeInterface[][],
        action: (pos: PosInterface) => void
    ): void => {
        const startNode = board[this.nodeStartRow][this.nodeStartCol];
        const finishNode = board[this.nodeFinishRow][this.nodeFinishCol];

        console.log(bfs(board, startNode, finishNode, action));
    };
}
