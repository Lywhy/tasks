'use strict';

function dice(type) {
    if (typeof type !== 'string') {
        throw new TypeError('Тип должен быть строкой');
    }

    const min = 1;
    const max = Number(type.split('').slice(1).join(''));

    return Math.round(Math.random() * (max-min) + min);
}

console.log(dice('d4'))