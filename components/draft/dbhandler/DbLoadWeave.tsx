//Contains load button to collect from db


import { useContext, useState } from 'react'

import { readWeaveObject } from '@/components/draft/filehandler/functions/set/readWeaveObject'
import { WeaveContext } from '@/contexts/weavecontext'

export function DbLoadWeave() {
    const { updateGrid } = useContext(WeaveContext) as WeaveContextType


    async function clickhandler() {
        console.log('I did stuff')
        try {
            let response = await fetch('/api/weave')
            const body = await response.json();
            console.log(body)
            const { weaveObject } = body
            console.log(weaveObject)
            
            upSetGrids(weaveObject)

        } catch (error) {
            console.log(error)
            alert('Ops, please try anoyher one')

        }
    }
        //TODO_Move to context
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