function arrayClean(nums, func) {
    let newArray = []

    for (const num of nums) {
        if (!func(num)) {
            newArray.push(num)
        }
    }

    return newArray
}

console.log(arrayClean([3, 6, 9, 2], x => x > 5))