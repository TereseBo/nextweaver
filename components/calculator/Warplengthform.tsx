'use client'
import './warplengthform.scss'

import { useState } from 'react'

import { calculateWarpLength } from '@/functions/calculator/warplength'
import { logger } from '@/functions/logger'
import { Item } from '@/types/item'
import { WarpLengthData } from '@/types/warp'

import { Formsection } from './Formsection'
import { Itemssection } from './Itemssection'
export function Warplengthform() {

    //TODO: Replace any type 
    const [warpData, setWarpData]: [WarpLengthData, any]= useState({
        waste: 50,
        lash_on: 50,
        take_up: 10,
        items: [] as Item[],
        shrinkage: 15,
        total: 100,
    })

    //Recalculates and updates state on change in form
    function bobby(e: React.ChangeEvent<HTMLFormElement>) {

        const inputValue = e.target.value
        const fieldId= e.target.id
        const stateCopy = { ...warpData}

        switch (fieldId){
            case 'items':
                const newItems = new Array(Number(inputValue)).fill({ length: 0, firsthem: 0, secondhem: 0 },)
                stateCopy['items'] = [...newItems]
                break;
            case 'total':
                stateCopy[fieldId as keyof WarpLengthData]=inputValue
                break;
            default:
                stateCopy[fieldId as keyof WarpLengthData]=inputValue
                stateCopy['total']=calculateWarpLength(stateCopy)
        }
        setWarpData(stateCopy)
    }

    return (
        <form id="warplength-form" name="warplength-form" onChange={ bobby} >
            <h3 className="form-header">Warp Length</h3>
            <Formsection>
                <label className="sectionlabel" htmlFor="waste">Loom waste: </label>
                <input className="sectioninput" type="number"  id="waste" name="loom-waste" min="1" max="99" value={(warpData.waste).toString()} onChange={(e) => bobby} /> <p className="unit">cm</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="lash_on">Lashing on: </label>
                <input className="sectioninput" type="number"  id="lash_on" name="lash-on" min="1" max="99" value={(warpData.lash_on).toString()} onChange={(e) => bobby} /> <p className="unit">cm</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="take_up">Take-up: </label>
                <input className="sectioninput" type="number" id="take_up" name="take-up" min="1" max="99" value={(warpData.take_up).toString()} onChange={(e) => bobby} /> <p className="unit"> %</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="shrinkage">Shrinkage: </label>
                <input className="sectioninput" type="number" id="shrinkage" name="shrinkage" min="1" max="50" value={Number(warpData.shrinkage)} onChange={(e) => bobby} /><p className="unit"> %</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="items">Nr of items: </label>
                <input className="sectioninput" type="number" id="items" name="items" min="1" max="99"
                    value={Number(warpData.items.length).toString()} onChange={(e)=>bobby} />
            </Formsection>
            <Itemssection nrofitems={warpData.items.length} />
            <Formsection>
                <label className="sectionlabel" htmlFor="total">Warp length: </label>
                <input className="sectioninput" type="number" id="total" name="total" min="1" max="10000" value={(warpData.total).toString()} onChange={(e) => bobby} />
                <p className="unit"> cm</p>
            </Formsection>
        </form>
    )
}