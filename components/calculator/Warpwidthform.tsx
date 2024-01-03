//Form for performing weave with calculations
'use client'
import './warpwidthform.scss'

import { useState } from 'react'

import { calculateWarpWidth } from '@/functions/calculator/warpwidth'

import { Formsection } from './Formsection'

export function Warpwidthform() {
    const [reedData, setReedData] = useState(
        {
            dents: 50,
            section: 10,
            tph: 1,
            tpd: 2,
        },
    )
    const [warpData, setWarpData] = useState(
        {
            ends: 750,
            epc: 10,
            width: 75,
        }
    )
    const [weftEpc, setWeftEpc]= useState(10)
    
    //Recalculates and updates state on change in form
    function bob(e: React.ChangeEvent<HTMLFormElement>) {

        const inputValue = +e.target.value
        const fieldId = e.target.id
        const newState = calculateWarpWidth(fieldId, inputValue, {...warpData}, {...reedData},)
        setReedData(newState['reed'])
        setWarpData(newState['warp'])
    }
   
    return (
        <form id="warpwidth-form" onChange={bob} name="warpwidth-form" >
            <h3 className="form-header">Warp width</h3>

            <Formsection>
                <label>Reed:</label>
                <input type="number" id="dents" name="dents" min="1" max="100"  value={reedData.dents}  onChange={(e)=>bob} />
                /
                <input type="number" id="section" name="section" min="1" max="100"  value={reedData.section} onChange={(e)=>bob} /> cm
            </Formsection>

            <Formsection>
                <label>Threding:</label>
                <input type="number" id="tph" name="" min="1" max="10"  value={reedData.tph} onChange={(e)=>bob} />

                <label htmlFor="tph">/heddle </label>
                <input type="number" id="tpd" name="tpd" min="1" max="10" value={reedData.tpd}  onChange={(e)=>bob} />
                <label htmlFor="tpd">/dent </label>
            </Formsection>

            <Formsection>
                <label>Ends/cm:</label>
                <label htmlFor="epc">warp </label>
                <input type="number" id="epc" name="epc" min="1" max="100"  value={+warpData.epc} onChange={(e)=>bob} />
                <label htmlFor="weft-epc">weft </label>
                <input type="number" id="weft-epc" name="weft-epc" min="1" max="100" defaultValue="10" onChange={(e)=>setWeftEpc(+e.target.value)}/>
            </Formsection>

            <Formsection>
                <label>Ends total:</label>
                <label htmlFor="ends">threads </label>
                <input type="number" id="ends" name="ends" min="1" max="2000"  value={warpData.ends}  onChange={(e)=>bob} />
            </Formsection>

            <Formsection>
                <label>Weave width:</label>
                <input type="number" id="width" name="width" min="1" max="10000" value={warpData.width }  onChange={(e)=>bob} />
                <label htmlFor="width">cm </label>
            </Formsection>

        </form>
    )
}