export function readTieup(tieupGrid: grid, pattern:[number[]]) {
    

    pattern.forEach((row, index) => {
        row.forEach(cell => {

            tieupGrid[index][cell]
        })
    })
    return tieupGrid
}