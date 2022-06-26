import { addOperators } from "./expression-add-operators";

describe("expression-add-operators", () => {
    spec("123", 6, ["1*2*3", "1+2+3"]);
    spec("232", 8, ["2*3+2", "2+3*2"]);
    spec("3456237490", 9191, []);
    spec("105", 5, ["1*0+5", "10-5"]);
    spec("00", 0, ["0+0", "0-0", "0*0"]);
    spec("3456237490", 9191, []);

    function spec(num: string, target: number, expected: string[]) {
        it(`${JSON.stringify({ num, target, expected })}`, () => {
            const res = addOperators(num, target);
            expect(res).toEqual(expect.arrayContaining(expected));
            expect(res.length).toEqual(expected.length);
        });
    }
});
