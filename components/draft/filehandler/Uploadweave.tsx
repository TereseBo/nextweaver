import { useContext, useState } from 'react'

//import Link from 'next/link'
import { WeaveContext } from '@/contexts/weavecontext'
import { toggleBool } from '@/functions/toggleBool'

import { readWeaveObject } from './functions/set/readWeaveObject'

export function Uploadweave() {
    const { updateGrid } = useContext(WeaveContext) as WeaveContextType
    const [displayInput, setDisplayInput] = useState<boolean>(false)

    function upLoadHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        console.log('INPUT!')
        if (e.target.files) {
            var reader = new FileReader();
            reader.onload = (readE) => {
                if (readE.target?.result) {

                    let fileContents = readE.target.result as string
                    const obj = JSON.parse(fileContents);
                    let newGrids = readWeaveObject(obj)

                    updateGrid('tieup', newGrids.tieupGrid)
                    updateGrid('warp', newGrids.warpGrid)
                    updateGrid('weft', newGrids.treadleGrid)
                }
            }
            reader.readAsText(e.target.files[0]);
        }
    }

    return (
        <>
            <button onClick={() => setDisplayInput(toggleBool(displayInput))}>Upload</button>
            <label htmlFor='weaveObject'>Weave file: </label><input type='file' onChange={(e) => upLoadHandler(e)} name='weaveObject'></input>
        </>

    )

}