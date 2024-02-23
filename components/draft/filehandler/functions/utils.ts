export function getHighest(sequence: number[]) {
    let number = null
    if (sequence.length > 0) {
        number = Math.max(...sequence);
    }
    return number
}

export function createGrid(width:number, height:number){

    return new Array(height).fill(new Array(width).fill('', 0))

}