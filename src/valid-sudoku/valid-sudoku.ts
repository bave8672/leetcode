/**
 * Determine if a 9x9 Sudoku board is valid.
 *
 * @param board the board to verify
 */
export function isValidSudoku(board: string[][]): boolean {
    const FULL_SET = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    const rows: Array<Set<string>> = [];
    const cols: Array<Set<string>> = [];
    const squares: Array<Array<Set<string>>> = [[], [], []];
    for (let i = 0; i < 9; i++) {
        rows.push(new Set(FULL_SET));
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === ".") {
                continue;
            }
            cols[j] = cols[j] || new Set(FULL_SET);
            const iSq = Math.floor(i / 3);
            const jSq = Math.floor(j / 3);
            squares[iSq][jSq] = squares[iSq][jSq] || new Set(FULL_SET);
            if (
                !(
                    rows[i].delete(val) &&
                    cols[j].delete(val) &&
                    squares[iSq][jSq].delete(val)
                )
            ) {
                return false;
            }
        }
    }
    return true;
}
