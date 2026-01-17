class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set setMileage(mileage) {
        if (typeof mileage !== 'string') {
            throw new TypeError('Указ неверный тип');
        }

        if (mileage === '' || mileage.trim() === '') {
            throw new Error('Пробег не может быть пустым');
        }

        this.#mileage = mileage;
    }

    get getMileage() {
        return this.#mileage;
    }

    info() {
        return `Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`;
    }
}

const audi = new Car('Audi', 'Q8', '48900');
console.log(audi.info());
audi.setMileage = '76913';
console.log(audi.getMileage);