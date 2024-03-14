import './dbsaveweave.scss'

import { useContext, useState } from 'react'

import { createWeaveObject } from '@/components/draft/filehandler/functions/get/createWeaveObject'
import { WeaveContext } from '@/contexts/weavecontext'

export function DbSaveWeave() {
    const { treadleGrid, tieUpGrid, warpGrid } = useContext(WeaveContext) as WeaveContextType
    

    const [open, setIsOpen] = useState(false);
    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false);

    async function saveWeave() {
        const weaveObject = createWeaveObject(warpGrid, treadleGrid, tieUpGrid)
        console.log(weaveObject)
        const body = { values: { weaveObject, user: 'Tess', name: 'One' } }
        fetch('/api/weave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(function (response) {
            console.log(response)
            if (response.status == 201) {
                console.log('sucsess', response)
            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <>
            <form className={open ? 'openForm' : 'hidden'} onMouseLeave={closeForm} >
                <label>Name your draft:</label><input type='text'></input>
                <button type='button' onClick={saveWeave}>Save</button>
            </form>
            <button className={open ? 'hidden': ''} type='button' onClick={saveWeave}  onMouseEnter={openForm}>Save</button>
        </>
    )

}