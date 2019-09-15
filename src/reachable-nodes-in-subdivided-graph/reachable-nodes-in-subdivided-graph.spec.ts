import { reachableNodes } from "./reachable-nodes-in-subdivided-graph";

describe("reachable-nodes-in-subdivided-graph", () => {
    it(`0`, () =>
        expect(reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3)).toBe(
            13,
        ));
    it(`1`, () =>
        expect(
            reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4),
        ).toBe(23));
    it(`base case 0`, () => expect(reachableNodes([], 0, 0)).toBe(0));
    it(`base case 1`, () => expect(reachableNodes([], 0, 1)).toBe(1));
    it(`2`, () => expect(reachableNodes([], 1, 2)).toBe(1));
    it(`3`, () =>
        expect(reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 10, 10)).toBe(
            16,
        ));
    it(`4`, () =>
        expect(
            reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 22]], 100, 3),
        ).toBe(36));
    it(`5`, () =>
        expect(
            reachableNodes(
                [
                    [1, 3, 23],
                    [3, 5, 19],
                    [3, 6, 17],
                    [1, 5, 14],
                    [6, 7, 20],
                    [1, 4, 10],
                    [1, 6, 0],
                    [3, 4, 20],
                    [1, 7, 4],
                    [0, 4, 10],
                    [0, 7, 9],
                    [2, 3, 3],
                    [3, 7, 9],
                    [5, 7, 4],
                    [4, 5, 16],
                    [0, 1, 16],
                    [2, 6, 0],
                    [4, 7, 11],
                    [2, 5, 14],
                    [5, 6, 22],
                    [4, 6, 12],
                    [0, 6, 2],
                    [0, 2, 1],
                    [2, 4, 22],
                    [2, 7, 20],
                ],
                19,
                8,
            ),
        ).toBe(301));
    it(`6`, () =>
        expect(
            reachableNodes(
                [[0, 1, 10], [0, 2, 1], [1, 2, 22], [0, 3, 1]],
                100,
                100,
            ),
        ).toBe(38));
    it(`7`, () =>
        expect(
            reachableNodes(
                [[6, 7, 20], [1, 6, 0], [0, 1, 16]],
                19,
                8,
            ),
        ).toBe(20));
    it(`8`, () =>
        expect(
            reachableNodes(
                [[6, 7, 20], [1, 6, 0], [0, 1, 16], [2, 6, 0]],
                19,
                8,
            ),
        ).toBe(21));
    it(`9`, () =>
        expect(
            reachableNodes(
                [[6, 7, 20], [1, 6, 0], [0, 1, 16], [2, 6, 0], [0, 6, 2]],
                19,
                8,
            ),
        ).toBe(38));
    it(`10`, () =>
        expect(
            reachableNodes(
                // tslint:disable-next-line: max-line-length
                [[4, 21, 114], [18, 25, 139], [3, 22, 244], [22, 26, 193], [18, 22, 98], [1, 24, 6], [17, 18, 42], [8, 25, 151], [5, 28, 265], [2, 22, 138], [9, 20, 126], [0, 8, 152], [22, 28, 39], [8, 27, 241], [11, 29, 147], [6, 23, 22], [24, 26, 274], [21, 27, 20], [15, 18, 8], [1, 19, 0], [0, 25, 164], [1, 22, 97], [15, 21, 19], [13, 16, 13], [18, 28, 141], [14, 20, 21], [14, 26, 60], [10, 13, 223], [11, 20, 93], [5, 8, 8], [11, 14, 288], [7, 28, 280], [5, 23, 191], [17, 19, 228], [12, 17, 278], [7, 16, 103], [9, 17, 188], [24, 29, 293], [20, 29, 18], [13, 25, 259], [19, 22, 136], [21, 26, 276], [6, 21, 113], [23, 25, 12], [18, 27, 155], [24, 25, 279], [7, 24, 165], [22, 23, 72], [2, 8, 204], [5, 6, 166], [16, 19, 166], [3, 9, 71], [19, 28, 66], [9, 12, 3], [5, 16, 291], [20, 26, 226], [16, 21, 271], [4, 15, 136], [16, 27, 71], [9, 21, 142], [11, 23, 293], [8, 22, 262], [25, 27, 219], [13, 27, 204], [16, 23, 129], [2, 6, 172], [24, 27, 228], [5, 25, 72], [17, 24, 20], [2, 25, 221], [19, 23, 145], [16, 20, 199], [14, 21, 86], [23, 24, 213], [17, 20, 260], [18, 29, 181], [6, 14, 1], [6, 9, 245], [8, 19, 67], [16, 26, 140], [9, 25, 26], [26, 28, 119], [10, 12, 268], [9, 23, 149], [21, 25, 214], [2, 28, 135], [10, 17, 149], [14, 24, 82], [15, 26, 203], [6, 28, 60], [2, 24, 272], [6, 19, 253], [0, 27, 76], [3, 28, 154], [5, 18, 287], [3, 12, 256], [18, 21, 31], [23, 26, 122], [8, 17, 113], [14, 28, 264], [7, 23, 289], [12, 28, 232], [0, 17, 193], [9, 14, 79], [8, 20, 79], [6, 8, 134], [6, 15, 123], [3, 11, 212], [0, 1, 125], [4, 9, 266], [2, 7, 30], [18, 20, 44], [14, 25, 229], [0, 2, 265], [14, 23, 159], [5, 10, 167], [3, 25, 174], [10, 23, 243], [4, 11, 253], [12, 26, 95], [11, 16, 120], [7, 9, 218], [15, 24, 208], [14, 22, 158], [7, 10, 90], [3, 17, 209], [2, 12, 232], [10, 20, 204], [1, 29, 275], [26, 27, 9], [6, 7, 74], [7, 22, 60], [15, 17, 62], [19, 24, 12], [23, 28, 194], [19, 21, 176], [6, 18, 55], [5, 9, 165], [20, 28, 84], [8, 23, 240], [16, 17, 208], [4, 28, 148], [13, 23, 207], [13, 15, 265], [14, 17, 181], [12, 15, 108], [6, 17, 53], [6, 12, 144], [1, 3, 2], [2, 10, 80], [5, 20, 158], [19, 20, 164], [13, 20, 53], [10, 16, 118], [25, 26, 142], [1, 7, 255], [9, 29, 61], [6, 13, 110], [18, 26, 276], [27, 28, 109], [15, 25, 164], [17, 27, 156], [21, 29, 275], [10, 18, 284], [12, 21, 85], [16, 28, 181], [0, 11, 222], [0, 9, 14], [5, 29, 226], [1, 18, 117], [12, 27, 195], [14, 18, 118], [12, 14, 57], [17, 28, 197], [9, 22, 17], [4, 8, 171], [0, 10, 158], [10, 29, 6], [25, 29, 202], [14, 16, 149], [9, 16, 74], [15, 23, 161], [19, 27, 196], [6, 22, 186], [20, 25, 213], [3, 10, 66], [3, 27, 275], [15, 29, 149], [16, 25, 83], [4, 26, 179], [14, 19, 26], [20, 23, 5], [10, 26, 76], [20, 24, 255], [7, 29, 31], [2, 23, 160], [17, 21, 224], [13, 22, 173], [13, 19, 69], [3, 18, 147], [7, 21, 124], [12, 29, 35], [26, 29, 106], [10, 21, 298], [9, 24, 14], [9, 10, 46], [18, 23, 256], [3, 16, 257], [23, 29, 32], [17, 26, 254], [13, 28, 260], [14, 27, 145], [0, 7, 52], [9, 11, 149], [21, 24, 7], [15, 28, 231], [3, 23, 58], [10, 28, 99], [3, 4, 177], [5, 26, 196], [0, 6, 71], [13, 14, 115], [12, 25, 177], [3, 14, 80], [16, 24, 258], [7, 19, 157], [13, 26, 195], [8, 12, 257], [6, 16, 24], [5, 17, 249], [0, 18, 79], [20, 21, 62], [5, 7, 205], [0, 5, 129], [11, 12, 225], [15, 22, 27], [5, 22, 188], [2, 21, 144], [25, 28, 223], [9, 15, 7], [18, 24, 21], [1, 20, 196], [10, 22, 299], [4, 14, 33], [8, 26, 75], [19, 25, 15], [4, 20, 245], [0, 13, 32], [22, 29, 215], [23, 27, 113], [1, 23, 160], [1, 6, 112], [2, 4, 62], [8, 18, 255], [24, 28, 20], [11, 22, 113], [2, 11, 236], [21, 28, 151], [2, 20, 156], [3, 29, 33], [22, 24, 63], [4, 6, 220], [0, 12, 94], [22, 27, 222], [11, 13, 180], [7, 15, 209], [21, 22, 90], [11, 27, 125], [4, 10, 256], [5, 14, 57], [28, 29, 22], [12, 24, 241], [7, 26, 259], [12, 23, 53], [2, 17, 245], [2, 27, 69], [6, 24, 238], [8, 10, 207], [9, 26, 139], [15, 19, 118], [9, 28, 261], [7, 8, 64], [4, 24, 176], [14, 29, 56], [4, 25, 280], [14, 15, 30], [5, 13, 282], [17, 25, 269], [8, 11, 291], [4, 29, 217], [5, 15, 284], [11, 21, 4], [11, 15, 109], [9, 13, 158], [8, 9, 170], [11, 18, 8], [5, 24, 261], [12, 20, 41], [16, 29, 41], [27, 29, 22]],
                172,
            30,
            ),
        ).toBe(41936));
    it(`11`, () =>
        expect(
            reachableNodes(
                [[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]],
                17,
            5,
            ),
        ).toBe(1));
});
