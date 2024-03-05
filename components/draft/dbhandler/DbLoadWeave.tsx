//Contains load button to collect from db


import { useContext, useState } from 'react'

import { readWeaveObject } from '@/components/draft/filehandler/functions/set/readWeaveObject'
import { WeaveContext } from '@/contexts/weavecontext'

export function DbLoadWeave() {
    const { updateGrid } = useContext(WeaveContext) as WeaveContextType
    const [displayInput, setDisplayInput] = useState<boolean>(false)

    function clickhandler(){
        console.log('I did stuff')

    }

    function upSetGrids(weaveObj: WeaveObject): void {
        
        let newGrids = readWeaveObject(weaveObj)

        updateGrid('tieup', newGrids.tieupGrid)
        updateGrid('warp', newGrids.warpGrid)
        updateGrid('weft', newGrids.treadleGrid)
    }


return (
    <>
        <button id="uploadButton" onClick={clickhandler}>Load
                    </button>
    </>

)

}