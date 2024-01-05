//Functions for handeling individual calculations of weave width and function for associated form 
'use client'
import { Reed } from '@/types/reed'
import { WarpWidthData } from '@/types/warp'

import { isZeroish } from '../utils/isZeroish'
import { roundToTwoDec } from '../utils/roundToTwo'

export function calculateWarpWidth(target: string, value: number, warpin: WarpWidthData, reedin: Reed/*data:  { warp: warpWidthData, reed: Reed } */) {

    const warp = { ...warpin }
    const reed = { ...reedin }

    switch (target) {
        //Warp data
        case ('ends'):
            warp.ends = value
            warp.width = calculateWeaveWidth(warp.ends, warp.epc)
            break;
        case 'epc':
            warp.epc = value
            warp.width = calculateWeaveWidth(warp.ends, warp.epc)
            break;
        case 'width':
            warp.width = value
            warp.ends = calculateWarpEnds(warp.epc, warp.width)
            break;
        //Reed data
        case ('dents'):
            reed.dents = value
            warp.epc = calculateEpcFromReed(reed.dents, reed.section, reed.tpd)
            warp.width = calculateWeaveWidth(warp.ends, warp.epc)
            break;
        case ('section'):
            reed.section = value
            warp.epc = calculateEpcFromReed(reed.dents, reed.section, reed.tpd)
            warp.width = calculateWeaveWidth(warp.ends, warp.epc)
            break;
        case ('tpd'):
            reed.tpd = value
            warp.epc = calculateEpcFromReed(reed.dents, reed.section, reed.tpd)
            warp.width = calculateWeaveWidth(warp.ends, warp.epc)
            break;
        default:
            break;

    }
    //TODO: Add function to check if reed is compatible with sett

    return { warp, reed }

}

//Calculations 
function calculateWeaveWidth(ends: number, epc: number) {
    if (isZeroish(ends) || isZeroish(epc)) {
        return 0;
    }

    return roundToTwoDec(ends / epc);
}
function calculateWarpEpc(ends: number, width: number) {
    if (isZeroish(ends) || isZeroish(width)) {
        return 0;
    }
    return Math.round(ends / width);
}
function calculateWarpEnds(epc: number, width: number) {
    if (isZeroish(epc) || isZeroish(width)) {
        return 0;
    }
    return Math.round(epc * width);
}
function calculateEpcFromReed(dents: number, section: number, tpd: number) {
    if (isZeroish(dents) || isZeroish(section) || isZeroish(tpd)) {
        return 0;
    }
    return Math.round((dents / section) * tpd);
}


