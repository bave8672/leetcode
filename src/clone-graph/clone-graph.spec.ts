import { cloneGraph, Node } from "./clone-graph";

let n = 0;

describe("clone-graph", () => {
    spec(new Node(0, []));
    spec(new Node(0, [new Node(1, [])]));

    {
        const a = new Node(0, []);
        const b = new Node(1, [a]);
        a.neighbors.push(b);
        spec(a);
        spec(b);
    }

    {
        const a = new Node(0, []);
        const b = new Node(1, [a]);
        const c = new Node(2, [a, b]);
        a.neighbors.push(b);
        spec(a);
        spec(b);
        spec(c);
    }

    {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        one.neighbors = [two, four];
        two.neighbors = [one, three];
        three.neighbors = [two, four];
        four.neighbors = [one, three];
        spec(one);
    }

    function spec(node: Node) {
        it(`${n++}`, () => {
            expect(cloneGraph(node)).toEqual(node);
        });
    }
});
