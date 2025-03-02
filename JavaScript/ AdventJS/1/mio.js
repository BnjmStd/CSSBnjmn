const firstRepeatedId = ({ id }) => {
    const uniqueId = new Set()
    
    for (let element of id) {
        if (uniqueId.has(element)) {
            return element
        }
        uniqueId.add(element)
    }

    return -1;
}

const res = firstRepeatedId({
    id: [2, 1, 1, 3, 3, 6, 7]
})

console.log(res)