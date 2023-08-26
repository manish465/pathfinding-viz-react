import { NodeInterface } from "../utils/specs";

export class BoardClass {
    private width: number;
    private height: number;
    private board: NodeInterface[][];

    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getBoard = (): NodeInterface[][] => {
        if (this.board) this.generateBoard();
        return this.board;
    };

    private static generateNodeData = (
        row: number,
        col: number
    ): NodeInterface => {
        return {
            pos: { x: row, y: col },
        };
    };

    public generateBoard = (): void => {
        const board: NodeInterface[][] = [];

        for (let i = 0; i < this.height; i++) {
            const boardRow: NodeInterface[] = [];

            for (let j = 0; j < this.width; j++) {
                const node = BoardClass.generateNodeData(i, j);
            }

            board.push(boardRow);
        }

        this.board = board;
    };
}
