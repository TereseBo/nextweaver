import { useContext, } from 'react'

import { createWeaveObject } from '@/components/draft/filehandler/functions/get/createWeaveObject'
import { WeaveContext } from '@/contexts/weavecontext'

export function DbSaveWeave() {
    const { treadleGrid, tieUpGrid, warpGrid } = useContext(WeaveContext) as WeaveContextType
    //TODO:Add userinformation from clerc

    const user = 'Tess'

    function saveWeave() {
        const weaveObject = createWeaveObject(warpGrid, treadleGrid, tieUpGrid)
        console.log(weaveObject)
        const body = { values: {weaveObject, user:'Tess', name:'One'}  }
        fetch('/api/weave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(function (response) {
            if (response.status == 201) {
                console.log('sucsess', response)
            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <button onClick={saveWeave} >Save</button>
    )

}