'use client'
import { Reed } from '@/types/reed'
import { warpWidthData } from '@/types/warp'

export function calculateWarpWidth(target: string, value: number, data: { warp: warpWidthData, reed: Reed }) {
    const newData = { data }
    const warp = data.warp
    const reed = data.reed
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

    return { warp: warp, reed: reed }

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
function isZeroish(number: number) {
    return number == 0;
}
function roundToTwoDec(nr: number) {
    return Math.round(nr * 100) / 100;
}

