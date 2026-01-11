'use strict';

function validAge(stringDate) {
    if (typeof stringDate !== 'string') {
        throw new TypeError('Дата должна быть в формате строки.');
    }

    if (String(new Date(stringDate)) === 'Invalid Date') {
        throw new Error('Неверный формат даты');
    }

    const dateNow = new Date().getFullYear();
    const birthDate = new Date(stringDate).getFullYear();

    return (Number(dateNow) - Number(birthDate)) > 14; 
}

console.log(validAge('2022-01-01'));