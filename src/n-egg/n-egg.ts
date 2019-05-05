const memo = new Map<string, number>();

/**
 * Generalization of the [two egg problem](http://datagenetics.com/blog/july22012/index.html)
 *
 * [NOT A LEETCODE PROBLEM, JUST HERE FOR PRACTICE]
 */
export function nEgg(eggs: number, floors: number): number {
    if (floors === 0) {
        return 0;
    } else if (floors === 1) {
        return 1;
    } else if (eggs === 1) {
        return floors;
    } else {
        const hash = `${eggs}:${floors}`;
        if (memo.has(hash)) {
            return memo.get(hash)!;
        }
        let result = Number.MAX_SAFE_INTEGER;
        for (let n = 1; n <= floors; n++) {
            const caseEggSurvives = 1 + nEgg(eggs, floors - n);
            const caseEggBreaks = 1 + nEgg(eggs - 1, n - 1);
            result = Math.min(result, Math.max(caseEggSurvives, caseEggBreaks));
        }
        memo.set(hash, result);
        return result;
    }
}
