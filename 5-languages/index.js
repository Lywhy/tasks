function langHello() {
    const languageCode = prompt("Введите код языка:");

    if (languageCode.length !== 2) {
        throw new Error("Введён неверный код языка");
    }

    switch (languageCode) {
        case 'ru':
            console.log("Добрый день!");
            break;
        case 'en':
            console.log("Good day!");
            break;
        case 'de':
            console.log("Gutten tag!");
            break;
        default:
            console.log("Данный язык не поддерживается")
            break;
    }
}