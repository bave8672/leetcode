export function uniquePaths(m: number, n: number): number {
    // ((m - 1) + (n - 1)) choose (m - 1)
    return (
        Factorial.factorial(m + n - 2) /
        Factorial.factorial(m - 1) /
        Factorial.factorial(n - 1)
    );
}

class Factorial {
    public static factorial(x: number): number {
        if (x <= 1) {
            return 1;
        }
        let memoised = this.memo.get(x);
        if (!memoised) {
            memoised = x * this.factorial(x - 1);
            this.memo.set(x, memoised);
        }
        return memoised;
    }
    private static memo = new Map<number, number>();
}
