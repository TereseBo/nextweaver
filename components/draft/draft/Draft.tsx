import './draft.scss'

import { useContext } from 'react'

import { Grid } from '@/components/draft/draft/Grid'
import { WeaveContext } from '@/contexts/weavecontext'

import { Weave } from './Weave'

export function Draft() {

    const {treadleGrid, warpGrid, tieUpGrid } = useContext(WeaveContext) as WeaveContextType

    function updateCurrentColor(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) {
        let target = e.target as HTMLInputElement
        const value = target.value
    }

    return (
        <div className="draft">
            <div className="partial">
                <Weave /> <Grid content={treadleGrid} type='treadle' />
            </div>
            <div className="partial">
                <Grid content={warpGrid} type='warp' /> <Grid content={tieUpGrid} type='tieup' />
            </div>
        </div>
    )
}


