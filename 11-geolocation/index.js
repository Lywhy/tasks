'use strict'

function getLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation не поддерживается'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve([latitude, longitude]);
            },
            (error) => {
                reject(new Error('Ошибка получения текущей локации'))
            }
        )
    })
}

getLocation().then((res) => console.log(`Широта: ${res[0]}, Долгота: ${res[1]}`)).catch((error) => console.error(error));