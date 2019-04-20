export function isMatch(str: string, pattern: string): boolean {
    const memo = new Set<string>();
    return _isMatch(str, pattern);

    function _isMatch(s: string, p: string) {
        const hash = `${s}:${p}`;
        if (hash !== ":" && memo.has(hash)) {
            return false;
        }
        memo.add(hash);
        return (
            matchEmpty(s, p) ||
            matchChar(s, p) ||
            matchDot(s, p) ||
            matchStar(s, p)
        );
    }

    function matchChar(s: string, p: string): boolean {
        return (
            /[a-z]/.test(p[0]) &&
            s[0] === p[0] &&
            _isMatch(s.substr(1), p.substr(1))
        );
    }

    function matchDot(s: string, p: string): boolean {
        return p[0] === "." && !!s[0] && _isMatch(s.substr(1), p.substr(1));
    }

    function matchStar(s: string, p: string): boolean {
        return (
            p[1] === "*" &&
            ((s === "" && p.length === 2) ||
                _isMatch(s, p.substr(2)) ||
                ((p[0] === "." || s[0] === p[0]) && _isMatch(s.substr(1), p)))
        );
    }

    function matchEmpty(s: string, p: string): boolean {
        return s === "" && p === "";
    }
}
