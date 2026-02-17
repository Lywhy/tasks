function allowFunc(validator: (value: any) => boolean) {
    return function (target: any, propertyKey: string) {
        let value: any = 0;
        
        Object.defineProperty(target, propertyKey, {
            get() {
                return value;
            },
            set(newValue: any) {
                if (validator(newValue)) {
                    value = newValue;
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}

class User {
    @allowFunc((a: number) => a > 0)
    age!: number;
}

// Тестирование
const person = new User();
console.log(person.age); // undefined (или 0 в зависимости от начального значения)

person.age = 0;
console.log(person.age); // undefined (0 не прошло валидацию)

person.age = 20;
console.log(person.age); // 20 ✅
