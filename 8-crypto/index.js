// My variant 
// function crypto(password) {
//     if (typeof password !== 'string') {
//         throw new TypeError("Пароль должен быть строкой!");
//     }
    
//     if (password.length <= 2) {
//         return password;
//     }
    
//     const symbols = password.split('').reverse();
//     const cryptoPassword = [];

//     for (let i = 0; i < symbols.length; i+=2) {
//         cryptoPassword.push(symbols.slice(i,2+i).reverse().join(''))
//     }

//     return cryptoPassword.join('');
// }

// function check(cryptoPassword, password) {
//     if (typeof cryptoPassword !== 'string' || typeof password !== 'string') {
//         throw new TypeError("Пароли должны быть строкой!");
//     }
    
//     if (cryptoPassword.length > password.length || cryptoPassword.length < password.length) {
//         throw new Error("Длинна паролей должна быть одинаковой!");
//     }
    
//     const symbols = cryptoPassword.split('').reverse();
//     const decryptoPassword = [];
    
//     for (let i = 0; i < symbols.length; i+=2) {
//         decryptoPassword.push(symbols.slice(i,2+i).reverse().join(''))
//     }
    
//     return decryptoPassword.join('') === password;
// }
// Task variant
function replaceSybmolIndex(array) {
    if (array.length >= 2) {
        const centerIndex = Math.floor(array.length/2);
        if (array.length % 2 === 0) {
            const temp = array[centerIndex - 1];
            array[centerIndex - 1] = array[centerIndex];
            array[centerIndex] = temp;
        } else {
            const temp = array[centerIndex - 1];
            array[centerIndex - 1] = array[centerIndex + 1];
            array[centerIndex + 1] = temp;
        }
    }
    
    return array
}

function crypto(password) {
    if (typeof password !== 'string') {
        throw new TypeError("Пароль должен быть строкой!");
    }
    
    if (password.length <= 2) {
        return password;
    }

    const symbols = password.split('');
    const centerIndex = Math.floor(symbols.length/2);
    const firstPart = symbols.slice(0,centerIndex).reverse();
    const secondPart = replaceSybmolIndex(symbols.slice(centerIndex,symbols.length).reverse());

    return firstPart.concat(secondPart).join('');
}

function check(cryptoPassword, password) {
    if (typeof cryptoPassword !== 'string' || typeof password !== 'string') {
        throw new TypeError("Пароли должны быть строкой!");
    }
    
    if (cryptoPassword.length > password.length || cryptoPassword.length < password.length) {
        throw new Error("Длинна паролей должна быть одинаковой!");
    }
    
    const symbols = cryptoPassword.split('');
    const centerIndex = Math.floor(symbols.length/2);
    const firstPart = symbols.slice(0,centerIndex).reverse();
    const secondPart = replaceSybmolIndex(symbols.slice(centerIndex,symbols.length).reverse());
    
    return firstPart.concat(secondPart).join('') === password;
}

console.log(crypto('password'));
console.log(check('rdwosspa','password'));
console.log(check('rdwosspa','passwoed'));