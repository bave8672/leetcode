/**
 * https://leetcode.com/problems/remove-invalid-parentheses/
 *
 * Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.
 *
 * Return all the possible results. You may return the answer in any order.
 */

/**
 * Recursive DFS - O(2^n) time, O(n^2) space including stack
 */
function removeInvalidParentheses(
    s: string,
    i = 0,
    prev = "",
    depth = 0,
): string[] {
    if (depth < 0) {
        return [];
    }
    if (i >= s.length) {
        return depth === 0 ? [prev] : [];
    }
    let l: string[];
    let r: string[];
    switch (s[i]) {
        case "(":
            l = removeInvalidParentheses(s, i + 1, prev + "(", depth + 1);
            r = removeInvalidParentheses(s, i + 1, prev, depth);
            break;
        case ")":
            l = removeInvalidParentheses(s, i + 1, prev + ")", depth - 1);
            r = removeInvalidParentheses(s, i + 1, prev, depth);
            break;
        default:
            return removeInvalidParentheses(s, i + 1, prev + s[i], depth);
    }
    if (!l.length) {
        return r;
    } else if (!r.length) {
        return l;
    } else if (l[0].length > r[0].length) {
        return l;
    } else if (l[0].length < r[0].length) {
        return r;
    } else {
        return Array.from(new Set([...l, ...r]).values());
    }
}

/**
 * Calculate the min deletions to speed up BFS by exiting early
 * TODO: fix this
 */
function removeInvalidParentheses2(s: string): string[] {
    let depth = 0;
    let budget = 0;
    for (const char of s) {
        if (char === "(") {
            depth++;
        } else if (char === ")") {
            depth--;
        }
        budget = Math.max(budget, depth ? depth : depth * -2);
    }
    return dfs(s, 0, "", 0, budget);
}

function dfs(
    s: string,
    i: number,
    prev: string,
    depth: number,
    budget: number,
): string[] {
    if (depth < 0 || budget < 0) {
        return [];
    }
    if (i >= s.length) {
        return depth === 0 ? [prev] : [];
    }
    let l: string[];
    let r: string[];
    switch (s[i]) {
        case "(":
            l = dfs(s, i + 1, prev + "(", depth + 1, budget);
            r = dfs(s, i + 1, prev, depth, budget - 1);
            break;
        case ")":
            l = dfs(s, i + 1, prev + ")", depth - 1, budget);
            r = dfs(s, i + 1, prev, depth, budget - 1);
            break;
        default:
            return dfs(s, i + 1, prev + s[i], depth, budget);
    }
    if (!l.length) {
        return r;
    } else if (!r.length) {
        return l;
    } else if (l[0].length > r[0].length) {
        return l;
    } else if (l[0].length < r[0].length) {
        return r;
    } else {
        return Array.from(new Set([...l, ...r]).values());
    }
}
