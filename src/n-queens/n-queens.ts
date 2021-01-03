/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where 'Q' and '.' both indicate a queen and an empty space respectively.
 */
export function solveNQueens(n: number): string[][] {
    // brute force all solutions
    const sols = solveNQueensRecursive(n);
    return sols.map((s) => createBoard(n, s));
}

function solveNQueensRecursive(
    n: number,
    queens = 0,
    sol: number[][] = [],
    X = initialRowOrColumn(n),
    Y = initialRowOrColumn(n),
    XY = new Set<number>(),
    YX = new Set<number>(),
): number[][][] {
    if (queens === n && n !== 0) {
        return [sol];
    }
    const x = X.values().next().value;
    const newSols: number[][][] = [];
    for (const y of Y) {
        if (!XY.has(x - y) && !YX.has(x + y)) {
            newSols.push(
                ...solveNQueensRecursive(
                    n,
                    queens + 1,
                    [...sol, [x, y]],
                    cloneExcluding(X, x),
                    cloneExcluding(Y, y),
                    cloneAndAdd(XY, x - y),
                    cloneAndAdd(YX, x + y),
                ),
            );
        }
    }
    return newSols;
}

function createBoard(n: number, soln: number[][]): string[] {
    const serialized = ".".repeat(n * n).split("");
    soln.forEach((q) => {
        serialized[q[0] + n * q[1]] = "Q";
    });
    const board: string[] = [];
    for (let i = 0; i < n; i++) {
        board.push(serialized.slice(i * n, i * n + n).join(""));
    }
    return board;
}

function initialRowOrColumn(n: number) {
    const set = new Set<number>();
    for (let i = 0; i < n; i++) {
        set.add(i);
    }
    return set;
}

function cloneExcluding(set: Set<number>, n: number): Set<number> {
    const clone = new Set(set);
    clone.delete(n);
    return clone;
}

function cloneAndAdd(set: Set<number>, n: number): Set<number> {
    const clone = new Set(set);
    clone.add(n);
    return clone;
}
