import { maxProfit } from "./best-time-to-buy-and-sell-stock-iii";

describe("best-time-to-buy-and-sell-stock-iii", () => {
    spec([1], 0);
    spec([1, 2, 3, 4, 5], 4);
    spec([3, 3, 5, 0, 0, 3, 1, 4], 6);
    spec([7, 6, 4, 3, 1], 0);
    spec([2, 1, 4], 3);

    function spec(prices: number[], expected: number) {
        it(`${JSON.stringify({ prices, expected })}`, () => {
            expect(maxProfit(prices)).toEqual(expected);
        });
    }
});
