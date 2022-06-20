/**
 * https://leetcode.com/problems/simplify-path/
 *
 * <problem description>
 */

export function simplifyPath(path: string): string {
    const dirs: string[] = [];
    path.split("/").forEach((seq) => {
        switch (seq) {
            case "":
            case ".":
                break;
            case "..":
                dirs.pop();
                break;
            default:
                dirs.push(seq);
        }
    });
    return `/${dirs.join("/")}`;
}
