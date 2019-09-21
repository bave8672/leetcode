"use strict";
const numJewelsInStones = function(J, S) {
    const jewels = new Set();
    for (const j of J) {
        jewels.add(j);
    }
    let n = 0;
    for (const s of S) {
        if (jewels.has(s)) {
            n++;
        }
    }
    return n;
};
