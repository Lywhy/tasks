interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
    b: string;
}

function difference<T extends object, K extends object>(firstObj: T, secondObj: K): Pick<T, Exclude<keyof T, keyof K>> {
    const res = {};

    return Object.keys(firstObj).reduce((res, key) => {
        if (!(key as string in secondObj)) {
            (res as any)[key] = firstObj[key as keyof T];
        }
        return res;
    }, {} as Pick<T, Exclude<keyof T, keyof K>>
    )
}

let v0: IDifference = difference(a, b);
console.log(v0)