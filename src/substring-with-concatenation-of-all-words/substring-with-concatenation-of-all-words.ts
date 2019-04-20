// tslint:disable-next-line: cognitive-complexity
export function findSubstring(s: string, words: string[]): number[] {
    if (!s || !words.length) {
        return [];
    }

    const results = new Set();
    const wordLength = words[0].length;

    let matchIndex = 0;
    let matchFrom = 0;

    while (matchIndex <= s.length - wordLength && matchIndex !== -1) {
        const map = new Map<string, number>();
        words.slice(1).forEach((word) => map.set(word, (map.get(word) || 0) + 1));
        matchIndex = s.indexOf(words[0], matchFrom);
        if (matchIndex === -1) {
            continue;
        }
        matchFrom = matchIndex + 1;
        let i = matchIndex;
        let j = i + wordLength;
        while (
            i >= wordLength &&
            map.get(s.substr(i - wordLength, wordLength))! > 0
        ) {
            const word = s.substr(i - wordLength, wordLength);
            const count = map.get(word)! - 1;
            if (count === 0) {
                map.delete(word);
            } else {
                map.set(word, count);
            }
            i -= wordLength;
        }
        while (map.get(s.substr(j, wordLength))! > 0) {
            const word = s.substr(j, wordLength);
            const count = map.get(word)! - 1;
            if (count === 0) {
                map.delete(word);
            } else {
                map.set(word, count);
            }
            j += wordLength;
        }
        if (map.size === 0) {
            results.add(i);
            while (s.substr(i, wordLength) === s.substr(j, wordLength)) {
                i += wordLength;
                j += wordLength;
                results.add(i);
            }
        }
    }

    return Array.from(results);
}
