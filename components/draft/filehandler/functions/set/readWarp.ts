import { defaultDraftWidth, defaultShafts,defaultWarpColor } from '@/constants/weaveDefaults'

import { createGrid } from '../utils'


export function readWarp(warp: ShaftDescription) {
    let shafts= warp.count || defaultShafts
    let warpGrid= createGrid(warp.pattern.length || defaultDraftWidth, shafts )

    let colors= warp.colors
     
    warp.pattern.forEach((thread, index) => {
        let currentColor = defaultWarpColor
        if (colors) {
            currentColor = colors[0].color
            colors[0].threads--
            if (colors[0].threads = 0) {
                colors.shift()
            }
        }
        warpGrid[thread][index] = currentColor

    })

    return warpGrid

}
