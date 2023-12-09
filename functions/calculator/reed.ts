type Reed={
    dents:number
    section:number
}

function calculateEpc(dents:number, section:number, tpd:number):number{
    return Math.round((dents/section)*tpd);
}