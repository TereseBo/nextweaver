'use client'
//Calculations relating to length
import { Item } from '@/types/item'
import { WarpLengthData } from '@/types/warp'

import { roundToTwoDec } from '../utils/roundToTwo'

//Returns required total warplength for warpdata object, assumes finished length is specefied in items
export function calculateWarpLength(warpLengthData: WarpLengthData): number {
    const { lash_on, waste, shrinkage, take_up, items } = warpLengthData
    let fixedLength = calculateSumLength(lash_on, waste);
    let itemsLength = undefined

    items.length > 0 ? itemsLength = calculateItemWarpLength(items, take_up, shrinkage) : itemsLength = 0

    const total = warpLength(fixedLength, itemsLength)
    return Math.floor(total)

}

//Returns required warplength for all items combined, assumes finished length is specefied in items
function calculateItemWarpLength(items: Item[], take_up: number, shrinkage: number): number {
    const itemLengths: number[] = items.map(item => Number(item.firsthem) + Number(item.secondhem) + Number(item.length))
    const combinedLength: number = itemLengths.reduce((a, b) => a + b, 0)
    const beforeWashShrinkage = combinedLength * (1 + shrinkage / 100)
    const beforeWeaveIn = beforeWashShrinkage * (1 + take_up / 100)

    return roundToTwoDec(beforeWeaveIn)
}

function calculateSumLength(...fixed: number[]) {//sums all params
    let sum = fixed.reduce((a, b) => Number(a) + Number(b), 0)
    return sum
}

function warpLength(itemsLength: number, fixed: number) {
    return itemsLength + fixed
}

//Returns items with equally distributed (finished) length.
export function calculateFinishedItemLength(warpLengthData: WarpLengthData): Item[] {
    let itemLength = 0
    let itemHem = 0
    const { lash_on, waste, shrinkage, take_up, items, total } = warpLengthData
    console.log('total going in: ', total)
    const nrOfItems = items.length
    const combinedLength = total - lash_on - waste
    if (combinedLength > 0) {

        console.log('combined items going in: ', combinedLength)
        const afterWeaveIn = combinedLength * (1 - take_up / 100)
        const afterWashShrinkage = afterWeaveIn * (1 - shrinkage / 100)
        console.log('After wash and shrink: ', afterWashShrinkage)
        const perItemTotal = afterWashShrinkage / nrOfItems
        console.log('per item tpotal:', perItemTotal)
        itemLength = Math.ceil(perItemTotal * 0.8)
        itemHem = Math.floor(perItemTotal * 0.1)
    }
    const calculatedItems: Item[] = new Array(nrOfItems)
    for (let i = 0; i < nrOfItems; calculatedItems[i++] = { length: itemLength, firsthem: itemHem, secondhem: itemHem });
    console.log('calculated items:')
    console.log(calculatedItems)

    return calculatedItems
}