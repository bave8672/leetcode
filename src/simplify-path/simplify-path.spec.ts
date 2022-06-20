import { simplifyPath } from "./simplify-path";

describe("simplify-path", () => {
    spec("/", "/");
    spec("/home/", "/home");
    spec("/../", "/");
    spec("/home//foo/", "/home/foo");
    spec("/a/./b/../../c/", "/c");

    function spec(path: string, expected: string) {
        it(`${JSON.stringify({ path, expected })}`, () => {
            expect(simplifyPath(path)).toEqual(expected);
        });
    }
});
