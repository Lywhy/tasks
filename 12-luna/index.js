function luna(cardNumber) {
    if (cardNumber.replace(/-/g,'').length !== 16 || typeof cardNumber === 'number') {
        throw new Error('Неверный формат карты')
    }
    
    const cardSums = cardNumber.replace(/-/g,'').split('').reduce((acc, num, index) => {
        const number = parseInt(num);
        index % 2 === 0 ? acc.even + number : acc.odd + (number * 2 >= 10 ? number*2-9 : number*2);
        return acc
    }, {even: 0, odd: 0})

    return (cardSums.even + cardSums.odd) % 10 === 0
}

console.log(luna('5062-8212-3456-7892'))