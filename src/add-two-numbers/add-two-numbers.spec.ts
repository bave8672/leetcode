import { addTwoNumbers } from "./add-two-numbers";
import { ListNode } from "./list-node";

describe("add-two numbers", () => {
    spec([2, 4, 3], [5, 6, 4], [7, 0, 8]);
    spec([0], [0], [0]);
    spec([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]);

    function spec(l1: number[], l2: number[], expected: number[]) {
        it(`should add ${JSON.stringify(l1)} to ${JSON.stringify(
            l2,
        )} and produce ${JSON.stringify(expected)}`, () => {
            expected.reverse();
            expect(addTwoNumbers(buildList(l1), buildList(l2))).toEqual(
                buildList(expected),
            );
        });
    }

    function buildList(l: number[]): ListNode {
        return l.reduce<ListNode | null>(
            (next: ListNode | null, val: number) => {
                return {
                    next,
                    val,
                };
            },
            null,
        )!;
    }
});
