import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import { TextButton } from '@/components/zSharedComponents/TextButton'
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
    
/*     function weaveDownloadHandler(){
        console.log('click')
        const weave= createWeaveObject(warpGrid || [], treadleGrid || [], tieUpGrid || [])
        const weaveJson= JSON.stringify(weave)
        let downloadLink=document.createElement('a')
        downloadLink.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(json))
        downloadLink.setAttribute('download', filename)
        downloadLink.style.display='none'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)

    } */
     {/* <TextButton text="Download" onClick={weaveDownloadHandler}/> */}

    return (
        
       
        <Link href={'data:application/json;charset=utf-8,' + encodeURIComponent(weaveJSON)} download='weave' target="_blank">Download</Link>
        
    )

}