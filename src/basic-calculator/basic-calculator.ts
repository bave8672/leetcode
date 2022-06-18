/**
 * https://leetcode.com/problems/basic-calculator/
 *
 * Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
 */

const enum Op {
    PLUS,
    MINUS,
}

export function calculate(s: string): number {
    let n: number = 0;
    let op: Op = Op.PLUS;
    const nStack: number[] = [0];
    const opStack: Op[] = [Op.PLUS];
    for (const char of s) {
        if (char === " ") {
            continue;
        } else if (char === "+") {
            updateHead();
            op = Op.PLUS;
        } else if (char === "-") {
            updateHead();
            op = Op.MINUS;
        } else if (char === "(") {
            opStack.push(op);
            nStack.push(n);
            op = Op.PLUS;
            n = 0;
        } else if (char === ")") {
            updateHead();
            reduce();
        } else {
            n = Number((n || "") + char);
        }
    }
    updateHead();
    return nStack[0];

    function reduce() {
        const n = nStack.pop()!;
        const op = opStack.pop()!;
        nStack[nStack.length - 1] = calc(nStack[nStack.length - 1], op, n);
    }

    function calc(x: number, op: Op, y: number = 0) {
        if (op === Op.PLUS) {
            return x + y;
        } else {
            return x - y;
        }
    }

    function updateHead() {
        nStack[nStack.length - 1] = calc(nStack[nStack.length - 1], op, n);
        n = 0;
    }
}
