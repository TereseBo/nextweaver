//Data needed to calculate warp with and length

//import {Item} from'./item'

type WarpWidthData = {
    ends: number,
    epc: number,
    width: number,
}

type WarpLengthData={
    waste:number,
    lash_on:number,
    take_up:number,
    shrinkage: number,
    items: Item[],
    total: number
}