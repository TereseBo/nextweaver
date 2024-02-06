'use client'
import './preferences.scss'

import { useContext } from 'react'

import { WeaveContext } from '@/contexts/weavecontext'
export function Preferences(){

    const {treadles, setTreadles, shafts, setShafts } = useContext(WeaveContext) as WeaveContextType

    function updateTreadle(e: React.ChangeEvent<HTMLInputElement>):void{
        setTreadles(+e.target.value)
    }

    function updateShaft(e: React.ChangeEvent<HTMLInputElement>):void{
        setShafts(+e.target.value)
    }
    
    return (
        <div className="form-container">
            <form id="preferences-form" method="post">
                <h3 className="form-header">Loom information</h3>
                <div>
                    <label htmlFor="shafts">Number of shafts</label>
                    <input type="number" name="shafts" id="shafts" placeholder={shafts.toString()} onChange={(e)=>{updateShaft(e)}}/>
                </div>
                <div>
                    <label htmlFor="thredles">Number of thredles</label>
                    <input type="number" name="thredles" id="thredles" placeholder={treadles.toString()} onChange={(e)=>{updateTreadle(e)}}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
    }