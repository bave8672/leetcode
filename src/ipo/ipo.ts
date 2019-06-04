export function findMaximizedCapital(
    k: number,
    W: number,
    Profits: ReadonlyArray<number>,
    Capital: ReadonlyArray<number>,
): number {
    // create an ordered stack of ordered stacks
    // with a top level sort by profit
    // and a secondary inverse sort by capital
    const data = buildData();
    // run the best project for the current capital until we run out of viable projects
    // or until we reach the maximum project limit
    for (let n = 0; n < k; n++) {
        if (runBestProject() === undefined) {
            break;
        }
    }
    return W;

    function runBestProject(): number | undefined {
        for (let id = data.length - 1; id >= 0; id--) {
            if (minCapital(data[id]) <= W) {
                W += data[id].profit;
                data[id].capitals.pop();
                if (data[id].capitals.length === 0) {
                    data.splice(id, 1);
                }
                return id;
            }
        }
    }

    function buildData(): GroupedProjects[] {
        const map = new Map<number, number[]>();
        for (let i = 0; i < Profits.length; i++) {
            const profit = Profits[i];
            let projects = map.get(profit);
            if (!projects) {
                projects = [];
                map.set(profit, projects);
            }
            projects.push(Capital[i]);
        }
        const result = Array.from(map)
            .map(([profit, capitals]: [number, number[]]) => ({
                capitals,
                profit,
            }))
            .sort((a, b) => a.profit - b.profit);
        // tslint:disable-next-line: no-misleading-array-reverse
        result.forEach((d) => d.capitals.sort((a, b) => b - a));
        return result;
    }

    function minCapital(projects: GroupedProjects | undefined): number {
        return projects
            ? projects.capitals[projects.capitals.length - 1]
            : Number.POSITIVE_INFINITY;
    }
}

interface GroupedProjects {
    profit: number;
    capitals: number[];
}
