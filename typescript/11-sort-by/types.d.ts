declare module 'sort-by' {
    export function sortBy(...args: any[]): (a: any, b: any) => number;

    export function sort(property: string, map: Record<string, any>): (a: any, b: any) => number;
}