'use strict';

const firstInput = document.getElementById('num_one');
const secondInput = document.getElementById('num_two');

const result = document.createElement('div');
result.setAttribute('id', 'result');

function getValueInput () {
    if (firstInput && secondInput) {
        if (!firstInput.value || !secondInput.value || Number.isNaN(Number(firstInput.value)) || Number.isNaN(Number(secondInput.value))) {
            throw new Error('Значения дожны быть только числами и не пустыми!')
        } else {
            return [Number(firstInput.value), Number(secondInput.value)]
        }
    } else {
        throw new Error('Неудалось определить значения.')
    }
}

function setResultElement(res) {
    if (document.getElementById('result')) {
        result.innerText = res;
    } else {
        document.body.appendChild(result);
        result.innerText = res;
    }
}

function sum () {
    const [numOne, numTwo] = getValueInput()
    setResultElement(numOne+numTwo)
}

function subtraction () {
    const [numOne, numTwo] = getValueInput()
    setResultElement(numOne-numTwo)
}

function multiplication () {
    const [numOne, numTwo] = getValueInput()
    setResultElement(numOne*numTwo)
}

function division () {
    const [numOne, numTwo] = getValueInput()
    setResultElement(numOne/numTwo)
}