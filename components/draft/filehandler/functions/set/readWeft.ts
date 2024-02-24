import { defaultDraftHeight, defaultTreadles,defaultWeftColor } from '@/constants/weaveDefaults'

import { createGrid, getHighest } from '../utils'


export function readWeft(weft: TreadlingDescription, height:number) {

    let width = weft.count || defaultTreadles
    let weftGrid = createGrid(width, height)

    if (weft.pattern== null ||!(weft.pattern.length > 0)) {
        return weftGrid
    }

    let colors = weft.colors

    weft.pattern.forEach((treadle, index) => {
        let currentColor = defaultWeftColor
        if (colors) {
            currentColor = colors[0].color
            colors[0].threads--
            if (colors[0].threads = 0) {
                colors.shift()
            }
        }
        weftGrid[index][treadle] = currentColor
    })

    return weftGrid

}
