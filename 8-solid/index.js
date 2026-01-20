class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {}
}

class fixBilling extends Billing {
    calculateTotal(billing) {
        return billing.amount;
    }
}

class hourBilling extends Billing {
    calculateTotal(billing, hours) {
        return billing.amount * hours;
    }
}

class itemBilling extends Billing {
    calculateTotal(billing, items) {
        return billing.amount * items;
    }
}

const billing = new Billing(1000);
const fix = new fixBilling();
const hour = new hourBilling();
const item = new itemBilling();

console.log(fix.calculateTotal(billing));
console.log(hour.calculateTotal(billing, 13));
console.log(item.calculateTotal(billing, 2));