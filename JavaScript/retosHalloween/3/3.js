function findSafesPath(dream) {

    const rowNum = dream.length
    const colNum = dream[0].length

    const dangersLevels = []

    dangersLevels[0] = dream[0][0]

    for (let col = 1; col < colNum; col++) {
        dangersLevels[col] = dangersLevels[col - 1] + dream[0][col]
    }

    for (let row = 1; row < rowNum; row++) {
        dangersLevels[0] += dream[row][0]

        for (let col = 1; col < colNum; col++) {
            dangersLevels[col] = Math.min(
                dangersLevels[col - 1], // abajo
                dangersLevels[col] // derecha
            ) + dream[row][col]
        }
    }

    return dangersLevels[colNum - 1]
    
}

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]

const bestPath = findSafesPath(dream) // 7