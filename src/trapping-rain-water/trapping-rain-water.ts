export function trap(heights: number[]): number {
    let trapped = 0;
    const stack: Array<{ index: number; height: number }> = [];
    heights.forEach((height, index) => {
        let h = 0;
        while (stack.length && h < height) {
            const prev = stack[stack.length - 1];
            trapped +=
                (Math.min(prev.height, height) - h) * (index - prev.index - 1);
            if (prev.height <= height) {
                stack.pop();
            }
            h = prev.height;
        }
        stack.push({ height, index });
    });

    return trapped;
}
