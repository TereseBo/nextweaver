import { useContext, } from 'react'

import { createWeaveObject } from '@/components/draft/filehandler/functions/get/createWeaveObject'
import { WeaveContext } from '@/contexts/weavecontext'

export function Downloadweave() {
    const { treadleGrid, tieUpGrid, warpGrid } = useContext(WeaveContext) as WeaveContextType


    function saveWeave() {
        const weaveObject = createWeaveObject(warpGrid, treadleGrid, tieUpGrid)
        console.log(weaveObject)
    }

    return (


        <button onClick={saveWeave} >Save</button>

    )

}