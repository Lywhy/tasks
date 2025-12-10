const query = {
    search: 'tea',
    price: '140'
}

function getAllQuery(query) {
    if (typeof query !== 'object' || !query) {
        console.log('Функция принимает объект!')
        return
    }

    let params = []
    for (const key in query) {
        params.push(`${key}=${query[key]}`)
    }

    return params.join('&')
}

console.log(getAllQuery(query))