/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 */

function totalNQueens(
    n: number,
    queens = 0,
    X = initialRowOrColumn(n),
    Y = initialRowOrColumn(n),
    XY = new Set(),
    YX = new Set(),
): number {
    if (queens === n && n !== 0) {
        return 1;
    }
    const x = X.values().next().value;
    let sols = 0;
    for (const y of Y) {
        if (!XY.has(x - y) && !YX.has(x + y)) {
            sols += totalNQueens(
                n,
                queens + 1,
                cloneExcluding(X, x),
                cloneExcluding(Y, y),
                cloneAndAdd(XY, x - y),
                cloneAndAdd(YX, x + y),
            );
        }
    }
    return sols;
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
