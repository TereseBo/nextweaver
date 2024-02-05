//Types for all warp data

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

type colorCollection=color[]
type grid=color[][]
type gridName='weave' | 'tieup'|'warp'|'treadle'
type WeaveContextType={
    //weaveGrid:grid,
    treadleGrid:grid,
    warpGrid:grid,
    tieUpGrid: grid,
    draftHeight:number,
    draftWidth: number,
    shafts:number,
    warpColors:colorCollection,
    weftColors:colorCollection
    updateCell:(cellId:string, newColor:color)=>void,
    currentColor:color,
    setCurrentColor:(newColor:color)=>void
/*     resizeGrid:(gridName:string, width:number, height:number)=> void,
    updateGrid:(x:number, y:number, color:color)=> void, */
/*     updateWarp:(width:number, height:number)=> void, 
    updateDraft:(width:number, height:number)=> void,
    updateTreadle:(width:number, height:number)=> void, */

}