const FULL_SET = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

export function solveSudoku(board: string[][]): void {
    solveSudokuRecursive(board)!.forEach((row, i) => (board[i] = row));
}

// tslint:disable-next-line: cognitive-complexity
function solveSudokuRecursive(board: string[][]): string[][] | undefined {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                const possible = new Set(FULL_SET);
                for (let ii = 0; ii < 9; ii++) {
                    possible.delete(board[ii][j]);
                }
                for (let jj = 0; jj < 9; jj++) {
                    possible.delete(board[i][jj]);
                }
                for (
                    let ii = 3 * Math.floor(i / 3);
                    ii < 3 * (Math.floor(i / 3) + 1);
                    ii++
                ) {
                    for (
                        let jj = 3 * Math.floor(j / 3);
                        jj < 3 * (Math.floor(j / 3) + 1);
                        jj++
                    ) {
                        possible.delete(board[ii][jj]);
                    }
                }
                for (const value of Array.from(possible)) {
                    const solution = solveSudokuRecursive(
                        cloneBoardWithValue(board, value, i, j),
                    );
                    if (solution) {
                        return solution;
                    }
                }
                return undefined;
            }
        }
    }
    return board;
}

function cloneBoardWithValue(
    board: string[][],
    value: string,
    i: number,
    j: number,
) {
    const clone = [...board.map((row) => [...row])];
    clone[i][j] = value;
    return clone;
}
