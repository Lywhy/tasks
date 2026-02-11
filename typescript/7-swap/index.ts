const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
    const res: Record<number, string> = {}
    for (let [key, value] of Object.entries(obj)) {
        res[value] = key
    }
    return res
}

const res = swapKeysAndValues(obj);
console.log(res)