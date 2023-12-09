type warpData={
    ends:number,
    epc:number,
    width:number,
}


function calculateWarpWidth(ends:number, epc:number, width:number, dents:number):warpData{
    const newWarpData:warpData={
        ends:0,
        epc:0,
        width:0,
    }
    if(ends && epc){
        newWarpData.width=ends / epc
    }
    if(ends && width){
        newWarpData.epc=ends / width
    }
    //TODO: Add handling of missmatched Reed
    if(epc&&width){
        newWarpData.ends=epc * width
    }

    //Round all numbers
    const warpKeys=Object.keys(newWarpData) as Array<keyof typeof newWarpData>

    warpKeys.forEach((key)=>{
        
        newWarpData[key]=Math.round(newWarpData[key] *100)/100;
    })
    
    return newWarpData


}
