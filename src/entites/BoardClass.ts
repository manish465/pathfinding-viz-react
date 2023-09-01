import { bfs } from "../algorithm/bfs";
import { getFunctionExecutionTime } from "../utils/regular";
import { NodeInterface, PosInterface } from "../utils/specs";

export class BoardClass {
    private width: number;
    private height: number;
    private startNodePos: PosInterface;
    private endNodePos: PosInterface;
    private board: NodeInterface[][];

    public constructor(width?: number, height?: number) {
        this.width = width ? width : Math.floor(window.innerWidth / 35);
        this.height = height ? height : Math.floor(window.innerHeight / 35);
        this.startNodePos = {
            row: Math.floor(Math.random() * this.width),
            col: Math.floor(Math.random() * this.height),
        };
        this.endNodePos = {
            row: Math.floor(Math.random() * this.width),
            col: Math.floor(Math.random() * this.height),
        };
        this.board = this.createBoard();
    }

    private createNode = (row: number, col: number): NodeInterface => {
        return {
            pos: { row, col },
            attr: {
                isStart:
                    row === this.startNodePos.row &&
                    col === this.startNodePos.col,
                isFinish:
                    row === this.endNodePos.row && col === this.endNodePos.col,
                isSearched: false,
            },
        };
    };

    private createBoard = (): NodeInterface[][] => {
        const board: NodeInterface[][] = [];

        for (let i = 0; i < this.width; i++) {
            const boardRow: NodeInterface[] = [];
            for (let j = 0; j < this.height; j++) {
                boardRow.push(this.createNode(i, j));
            }
            board.push(boardRow);
        }

        return board;
    };

    public search = (board: NodeInterface[][]): void => {
        const startNode = board[this.startNodePos.row][this.startNodePos.col];
        const finishNode = board[this.endNodePos.row][this.endNodePos.col];

        console.log(
            getFunctionExecutionTime(() => {
                console.log(bfs(board, startNode, finishNode));
            })
        );
    };

    public getBoard = (): NodeInterface[][] => {
        return this.board;
    };
}
