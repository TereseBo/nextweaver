import './draft.scss'

import { useContext } from 'react'

import { Grid } from '@/components/draft/draft/Grid'
import { WeaveContext } from '@/contexts/weavecontext'

export function Draft() {


    const { weaveGrid, treadleGrid, warpGrid, tieUpGrid } = useContext(WeaveContext) as WeaveContextType

    function updateCurrentColor(e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) {
        let target = e.target as HTMLInputElement
        const value = target.value
        console.log(value)


    }

    return (
        <div className="draft">
            <div className="partial">
                <Grid content={weaveGrid} type='weave' /> <Grid content={treadleGrid} type='treadle' />
            </div>
            <div className="partial">
                <Grid content={warpGrid} type='warp' /> <Grid content={tieUpGrid} type='tieup' />
            </div>
        </div>
    )
}


