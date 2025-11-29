// Initial parameters
const addressLat = 10;
const addressLong = 12;
const positionLat = 2;
const positionLong = '4';

function checkParameters(param) {
    return typeof param === 'number';
}


function distancePoints(x2, x1, y2, y1) {
    if ([...arguments].every(item => checkParameters(item))) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    console.error("Неверный формат входных параметров. Входные параметры должны быть числом!");
}

console.log(distancePoints(addressLat, positionLat, addressLong, positionLong));