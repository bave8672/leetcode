/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // one pass using a stack
    // time and space O(n)
    const stack = [];
    for (const b of s) {
        switch (b) {
            case ")":
                if (stack.pop() !== "(") {
                    return false;
                }
                continue;
            case "]":
                if (stack.pop() !== "[") {
                    return false;
                }
                continue;
            case "}":
                if (stack.pop() !== "{") {
                    return false;
                }
                continue;
            default:
                stack.push(b);
        }
    }
    return stack.length === 0;
};
