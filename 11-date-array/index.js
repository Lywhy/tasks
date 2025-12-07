const dateArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023']

function arrayDateClear(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Передаваемый элемент должен быть массивом!')
    }
    
    const filteredDate = array.filter(date => {
        if (new Date(date).toString() !== 'Invalid Date') {
            return date
        }
    })
    
    
    return filteredDate.map(date => date.replace(/[.\/]/g, '-'))
}

console.log(arrayDateClear(dateArray))