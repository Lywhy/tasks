function allowFunc<T>(validator: (value: T) => boolean): PropertyDecorator {
    return (target: any, propertyKey: string | symbol) => {
        const privateKey = `__${String(propertyKey)}_storage`;
        
        Object.defineProperty(target, propertyKey as any, {
            get(this: any) {
                if (!(privateKey in this)) {
                    this[privateKey] = 30 as T;
                }
                return this[privateKey];
            },
            set(this: any, newValue: T) {
                if (validator(newValue)) {
                    this[privateKey] = newValue;
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}

class User {
    @allowFunc((a: number) => a > 0)
    age: number = 30;
}

const person = new User();
console.log(person.age);
person.age = 0;
console.log(person.age);
person.age = 20;
console.log(person.age);
