const exchangeRate = {
    RUB: {
        USD: 78.23,
        EUR: 90.82
    },
    USD: {
        RUB: 78.23,
        EUR: 0.8621
    },
    EUR: {
        USD: 1.16,
        RUB: 0.011011
    }
}

function converter(sum, currencyFrom, currencyTo) {
    if (!Number.isFinite(sum) || sum < 0) {
        throw new Error("Сумма должна быть числом и не меньше 0");
    }

    if (!exchangeRate[currencyFrom] || !exchangeRate[currencyTo]) {
        return null;
    }

    return sum * exchangeRate[currencyFrom].currencyTo
}

console.log(converter(1000, "USD", "EUR"))