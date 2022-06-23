import * as fs from "fs";

async function main() {
    const problem = process.argv[2];
    if (!problem) {
        throw new Error(
            `Please provide the name of the problem to add, e.g: "npm run add -- n-queens"`,
        );
    }
    // tslint:disable-next-line: no-console
    console.log(`Scaffolding files for problem: ${problem}`);
    mkDir(problem, () => writeFiles(problem));
}

function mkDir(problem: string, cb: () => any) {
    fs.mkdir(`./src/${problem}`, (err) => {
        if (err) {
            throw err;
        }
        cb();
    });
}

function writeFiles(problem: string) {
    writeSolutionFile(problem);
    writeSpecFile(problem);
}

function writeSolutionFile(problem: string) {
    fs.writeFile(
        `./src/${problem}/${problem}.ts`,
        `
/**
 * https://leetcode.com/problems/${problem}/
 *
 * <problem description>
 */

export function ${camelToSnakeCase(problem)}(...args: unknown[]): unknown {

}
`.trim(),
        throwOnError,
    );
}

function writeSpecFile(problem: string) {
    fs.writeFile(
        `./src/${problem}/${problem}.spec.ts`,
        `
import { ${camelToSnakeCase(problem)} } from "./${problem}";

describe("${problem}", () => {
    spec();

    function spec(input: any, expected: any) {
        it(\`\${JSON.stringify({ input, expected })}\`, () => {
            expect(${camelToSnakeCase(problem)}(input)).toEqual(expected);
        });
    }
})
`.trim(),
        throwOnError,
    );
}

function throwOnError(err: any) {
    if (err) {
        throw err;
    }
}

function camelToSnakeCase(s: string): string {
    return s.replace(/-\w/g, (sub) => sub[1].toUpperCase());
}

main();
