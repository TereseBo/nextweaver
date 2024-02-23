import { defaultShafts, defaultTreadles } from '@/constants/weaveDefaults'

import { createGrid } from '../utils'
import { readTieup } from './readTieup'
import { readWarp } from './readWarp'
import { readWeft } from './readWeft'

export function readWeaveObject(weaveObject: WeaveObject) {
    let shafts = weaveObject.shafts.count
    let treadles = weaveObject.treadling.count
    let tieupGrid: grid = createGrid(treadles || defaultTreadles, shafts || defaultShafts)
    tieupGrid= readTieup(tieupGrid, weaveObject.tieup.pattern)
    let treadleGrid: grid = readWeft(weaveObject.treadling)
    let warpGrid: grid =readWarp(weaveObject.treadling)

  
    return {warpGrid, tieupGrid, treadleGrid}

}