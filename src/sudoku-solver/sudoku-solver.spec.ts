import { solveSudoku } from "./sudoku-solver";

describe(`sudoku-solver`, () => {
    it(`0`, () => {
        const input = [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ];
        solveSudoku(input);
        validateSolution(input);
    });

    function validateSolution(board?: string[][]) {
        const FULL_SET = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
        if (!board) {
            throw new Error("No solution found");
        }
        const rows: Array<Set<string>> = [];
        const cols: Array<Set<string>> = [];
        const squares: Array<Array<Set<string>>> = [[], [], []];
        for (let i = 0; i < 9; i++) {
            rows.push(new Set(FULL_SET));
            for (let j = 0; j < 9; j++) {
                cols[j] = cols[j] || new Set(FULL_SET);
                const iSq = Math.floor(i / 3);
                const jSq = Math.floor(j / 3);
                squares[iSq][jSq] = squares[iSq][jSq] || new Set(FULL_SET);
                const val = board[i][j];
                expect(
                    rows[i].delete(val) &&
                        cols[j].delete(val) &&
                        squares[iSq][jSq].delete(val),
                ).toBe(true);
            }
        }
    }
});
