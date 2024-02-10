//Contains logic for optional additions to draftpage,mainly intended for use when planning a weaving project and printing the draft
import './ProjectOptions.scss'

import { useState } from 'react'
import { useContext } from 'react'

import { WeaveContext } from '@/contexts/weavecontext'
import { toggleBool } from '@/functions/toggleBool'

import { Yarnlist } from './forms/Yarnlist'
import { Warpwidthform } from '../calculator/Warpwidthform'
import { SecondaryMenu } from '../zSharedComponents/SecondaryMeny'


export function ProjectOptions() {
    const [displayYarn, setDisplayYarn] = useState(false)
    const [displayWarp, setDisplayWarp] = useState(false)

    const { weftColors, warpColors} = useContext(WeaveContext) as WeaveContextType

    function yarnClickhandler(): void {
        setDisplayYarn(toggleBool(displayYarn))
    }
    function warpClickhandler(): void {
        setDisplayWarp(toggleBool(displayWarp))
    }
    return (
        <div>
            <SecondaryMenu>
                {displayYarn ? <button onClick={yarnClickhandler}>Hide yarn list</button> : <button onClick={yarnClickhandler}>Add yarn list</button>}
                {displayWarp ? <button onClick={warpClickhandler}>Hide warp info</button> : <button onClick={warpClickhandler}>Add warp info</button>}
                {/* TODO: Add save button options after implementing logIn <button>Save draft</button> */}


            </SecondaryMenu>
            <div className='optional-content'>
                {displayWarp ? <Warpwidthform /> : null}
                {displayYarn ? <Yarnlist content={warpColors} heading={'Warp'}/> : null}
                {displayYarn ? <Yarnlist content={weftColors} heading={'Weft'}/> : null}


            </div>
        </div>
    )
}