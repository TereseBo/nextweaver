export function collectWarp(warp: grid) {
   // let shafts = {}
    let colorPatternTracker = 0;
    let pattern:number[] = [];
    let colors:ColorDescription[] = [];
    let previousColor:color|undefined = undefined;

    let shaft = null;

    //Loop grid and translate to weaveObject
    //Loop every warp column and isolate it for extraction of shaft number and color
    for (let i = 0; i < warp[0].length; i++) {
        let currentColumn = []

        for (let j = 0; j < warp.length; j++) {
            currentColumn.push(warp[j][i])
        }
        let newColor = undefined
        currentColumn.forEach((cell, index) => {
            if (cell != '') {
                newColor = cell
                shaft = index
                pattern.push(shaft);
                if (newColor === previousColor) {
                    colorPatternTracker++;
                    previousColor = newColor;
                    colors.pop()
                } else {
                    colorPatternTracker++;
                
                    colorPatternTracker = 0;
                    previousColor = newColor;
                }
                colors.push({ color: previousColor, threads: colorPatternTracker });
                return
            }
        })

    }
    let shafts: ShaftDescription={
        count: getHighest(pattern),
        pattern:pattern,
        pattern_repeat:null,
        colors:colors
    }
}

function getHighest(sequence:number[]){
    let number=null
    if (sequence.length > 0) {
        number = Math.max(...sequence);
    } 
    return number
}


/* count: null | number,
pattern: [],
pattern_repeat: null | number,
selvage:SelvageDescription,
colors:ColorDescription[] */