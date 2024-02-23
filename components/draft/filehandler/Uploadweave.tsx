import { useContext, useState } from 'react'

//import Link from 'next/link'
import { WeaveContext } from '@/contexts/weavecontext'
import { toggleBool } from '@/functions/toggleBool'

import { readWeaveObject } from './functions/set/readWeaveObject'

export function Uploadweave() {
    const { setTreadleGrid, setTieUpGrid, setWarpGrid } = useContext(WeaveContext) as WeaveContextType
    const [displayInput, setDisplayInput]= useState<boolean>(false)
  
    function upLoadHandler(e:React.ChangeEvent<HTMLInputElement>):void{
        console.log('INPUT!')
        if(e.target.files){
        var reader = new FileReader();
        reader.onload = (readE)=>{
            if(readE.target?.result){
            console.log(readE.target.result);
            let fileContents=readE.target.result as string
            const obj = JSON.parse(fileContents);
            let newGrids= readWeaveObject(obj)
            setTieUpGrid(newGrids.tieupGrid)
            setTreadleGrid(newGrids.treadleGrid)
            setWarpGrid(newGrids.warpGrid)
            }
        }
        reader.readAsText(e.target.files[0]);

        }

    }


    return (
        <>
        <button onClick={()=>setDisplayInput(toggleBool(displayInput))}>Upload</button>
        <label htmlFor='weaveObject'>Weave file: </label><input type='file' onChange={(e)=>upLoadHandler(e)} name='weaveObject'></input>
        </>

    )

}