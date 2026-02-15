interface IUser {
    name: string,
    age: number,
    skills: string[]
}

const user: IUser = {
    name: "Vasiliy",
    age: 8,
    skills: ['typescript', 'javascript']
}

function pickObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T,K> {
    return keys.reduce((map, key) => {
        if (key in obj) {
            map[key] = obj[key]
        }
        return map
    }, {} as Pick<T, K>)
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res)