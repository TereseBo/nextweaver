import './draft.scss'

import { Grid } from '@/components/tinyBits/Grid'

export function Draft() {
    const weaveTemplate: string[][] = new Array(50).fill(new Array(20).fill('', 0))
    const tredleTemplate: string[][] = new Array(50).fill(new Array(4).fill('', 0))
    const warpTemplate: string[][] = new Array(4).fill(new Array(20).fill('', 0))
    const tieupTemplate: string[][] = new Array(4).fill(new Array(4).fill('', 0))

    return (
        <div className="draft">
            <div className="partial">
                <Grid content={weaveTemplate} type='weave' /> <Grid content={tredleTemplate} type='tredle' />
            </div>
            <div className="partial">
                <Grid content={warpTemplate} type='warp' /> <Grid content={tieupTemplate} type='tieup' />
            </div>
        </div>
    )
}


