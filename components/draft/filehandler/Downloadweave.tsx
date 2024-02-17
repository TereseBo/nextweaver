import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import { WeaveContext } from '@/contexts/weavecontext'

import { createWeaveObject } from './functions/createWeaveObject'

export function Downloadweave(){
    const {treadleGrid, tieUpGrid, warpGrid} = useContext(WeaveContext) as WeaveContextType
    const [weaveJSON, setWeaveJSON]= useState('')
    useEffect(() => {
        if(warpGrid && treadleGrid && tieUpGrid){
        const weave= createWeaveObject(warpGrid, treadleGrid, tieUpGrid)
        const weaveJson= JSON.stringify(weave)
        setWeaveJSON(weaveJson)
        }
    }, [warpGrid, treadleGrid, tieUpGrid])
    

    return (
        
       
        <Link href={'data:application/json;charset=utf-8,' + encodeURIComponent(weaveJSON)} download='weave' target="_blank">Download</Link>
        
    )

}