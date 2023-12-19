'use client'
import './warpwidthform.scss'

import {  useState } from 'react'

import { calculateWarpWidth} from '@/functions/calculator/warpwidth'

import { Formsection } from './Formsection'



export function Warpwidthform() {
    const [formData, setFormData] = useState(
        {
            reed: {
                dents: 50,
                section: 10,
                tph:1,
                tpd:2,
            },
            warp: {

                ends: 750,
                epc: 10,
                width: 100,
            }
        }
    )

    function bob(e: React.ChangeEvent<HTMLFormElement>) {
        
        console.log(e.target.value)
        console.log(e.target.id)
        
        const newval=+e.target.value
        const fieldId=e.target.id
        const newData={...formData}
        const sec=calculateWarpWidth(fieldId, newval, newData)
        
        console.log(newData)
        setFormData(sec)
 
    }


    return (
        <form id="warpwidth-form" onChange={bob} >
            <h3 className="form-header">Warp width</h3>

            <Formsection>
                <label>Reed:</label>
                <input type="number" id="dents" name="dents" min="1" max="100" defaultValue={formData.reed.dents} />
                /
                <input type="number" id="section" name="section" min="1" max="100" defaultValue={formData.reed.section} /> cm
            </Formsection>

            <Formsection>
                <label>Threding:</label>
                <input type="number" id="tph" name="" min="1" max="10" defaultValue={formData.reed.tph} />

                <label htmlFor="tph">/heddle </label>
                <input type="number" id="tpd" name="tpd" min="1" max="10" defaultValue={formData.reed.tpd}  />
                <label htmlFor="tpd">/dent </label>
            </Formsection>



            <Formsection>
                <label>Ends/cm:</label>
                <label htmlFor="epc">warp </label>
                <input type="number" id="epc" name="epc" min="1" max="100" defaultValue={formData.warp.epc} />
                <label htmlFor="weft-epc">weft </label>
                <input type="number" id="weft-epc" name="weft-epc" min="1" max="100" value="10" />
            </Formsection>



            <Formsection>
                <label>Ends total:</label>
                <label htmlFor="ends">threads </label>
                <input type="number" id="ends" name="ends" min="1" max="2000" defaultValue={formData.warp.ends} />
            </Formsection>



            <Formsection>
                <label>Weave width:</label>
                <input type="number" id="width" name="width" min="1" max="300" defaultValue={formData.warp.width} />
                <label htmlFor="width">cm </label>
            </Formsection>

        </form>
    )


}