'use strict';

const array = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" }
];

const uniqueIds = new Set(array.map(item => item.id));

const unique = [...uniqueIds].map(id => array.find(item => item.id === id));

console.log(unique)