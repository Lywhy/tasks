/* Сделать приложение, которое в браузере выводит таймер реального времени, который показывает сколько осталось до нового года в формате:

10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд */
'use strict';

const blockTimer = document.getElementById('timer')

function getTimeDateLeft(date) {
    const dateEnd = new Date(new Date().getFullYear(), 11, 31, 23,59,59);
    const dateNow = new Date(date)

    const months = (dateEnd.getMonth() + 1) - (dateNow.getMonth() + 1);
    const days = dateEnd.getDate() - dateNow.getDate();
    const hours = dateEnd.getHours() - dateNow.getHours();
    const minutes = dateEnd.getMinutes() - dateNow.getMinutes();
    const seconds = dateEnd.getSeconds() - dateNow.getSeconds();

    return `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

const intervalId = setInterval((message) => {
    blockTimer.innerText = getTimeDateLeft(Number(new Date()) + 1);
}, 1000)
