interface Data {
    group: number,
    name: string
}

const array: Data[] = [
{ group: 1, name: 'a' },
{ group: 1, name: 'b' },
{ group: 2, name: 'c' },
];

interface IGroup<T> {
    [key: string]: T[] 
}

type Keys = number | string | symbol

function group<T extends Record<Keys, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce<IGroup<T>>((map, item) => {
        if (map[item[key]] === undefined) {
            map[item[key]] = [item]
        } else {
            map[item[key]]!.push(item)
        }
        return map
    }, {})
}

console.log(group(array, 'group'))