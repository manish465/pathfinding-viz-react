export interface BoardNode {
    col: number;
    row: number;
    isStart: boolean;
    isFinish: boolean;
    distance: number;
    isVisited: boolean;
    isWall: boolean;
    previousNode: any;
}

export interface BoardNodeComponet {
    col: number;
    row: number;
    isStart: boolean;
    isFinish: boolean;
    isWall: boolean;
    mouseIsPressed: boolean;
    handleMouseEnter: (row:number, col:number) => void,
}