class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set mileage(mileage) {
        if (typeof mileage !== 'number') {
            throw new TypeError('Указ неверный тип');
        }

        if (mileage < this.mileage) {
            throw new Error('Пробег не может быть меньше указанного');
        }

        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    info() {
        return `Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`;
    }
}

const audi = new Car('Audi', 'Q8', 48900);
console.log(audi.info());
audi.mileage = 76915;
console.log(audi.mileage);