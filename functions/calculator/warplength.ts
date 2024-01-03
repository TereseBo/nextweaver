'use client'
import { Item } from '@/types/item'
import { WarpLengthData } from '@/types/warp'

import { roundToTwoDec } from '../utils/roundToTwo'
export function calculateWarpLength(warpLengthData:WarpLengthData):number{
        const {lash_on, waste, shrinkage, take_up, items}= warpLengthData
        let fixedLength = calculateFixedLength(lash_on, waste);
        let itemsLength = undefined

        items.length>0? itemsLength=calculateItemLengths(items, take_up, shrinkage ):itemsLength=0
        
        const total= warpLength(fixedLength, itemsLength)
        return roundToTwoDec(total)

}

//Calculations relating to length
function calculateItemLengths( items:Item[], take_up:number, shrinkage: number):number{
    const itemLengths:number[]= items.map(item=>Number(item.firsthem)+Number(item.secondhem)+Number(item.length))
    const combinedLength:number=itemLengths.reduce((a,b)=>a+b,0)
    const afterWeave=combinedLength*(1+take_up/100)
    const afterWash=afterWeave*(1+shrinkage/100)
    
    return roundToTwoDec(afterWash)
}
function calculateFixedLength( ...fixed:number[]){//sums all params
    let sum = fixed.reduce((a,b)=>Number(a)+Number(b),0)
    return sum
}
function warpLength(itemsLength: number, fixed:number){
    return itemsLength+fixed
}


