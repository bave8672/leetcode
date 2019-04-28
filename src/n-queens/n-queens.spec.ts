import { solveNQueens } from "./n-queens";

describe("n-queens", () => {
    it(`0`, () => {
        expect(solveNQueens(0)).toEqual([]);
    });
    it(`1`, () => {
        expect(solveNQueens(1)).toEqual([["Q"]]);
    });
    it(`2`, () => {
        const solns = solveNQueens(2);
        expect(solns).toEqual([]);
    });
    it(`3`, () => {
        const solns = solveNQueens(3);
        expect(solns).toEqual([]);
    });
    it(`4`, () => {
        const solns = solveNQueens(4);
        expect(solns.length).toEqual(2);
    });
    it(`5`, () => {
        const solns = solveNQueens(5);
        expect(solns.length).toEqual(10);
    });
});
