import { defaultDraftHeight, defaultTreadles,defaultWeftColor } from '@/constants/weaveDefaults'

import { createGrid, getHighest } from '../utils'


export function readWeft(weft: TreadlingDescription) {
    let height = weft.pattern.length || defaultDraftHeight
    let width = weft.count || defaultTreadles
    let weftGrid = createGrid(width, height)

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