'use client'
import './warplengthform.scss'

import {useState} from 'react'

import { Formsection } from './Formsection'
import { Itemssection } from './Itemssection'

export function Warplengthform(){
    const [nrofitems, setNrofitems]=useState(0)
return(
    <form id="warplength-form">
            <h3 className="form-header">Warp Length</h3>
            <Formsection>
                <label className="sectionlabel" htmlFor="threads-heddle">Loom waste: </label>
                <input className="sectioninput" type="number" data-unit="cm" id="loom-waste" name="loom-waste" min="1" max="99" value="50"/> <p className="unit">cm</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="lash-on">Lashing on: </label>
                <input className="sectioninput" type="number" data-unit="cm" id="lash-on" name="lash-on" min="1" max="99" value="50"/> <p className="unit">cm</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="Take-up">Take-up: </label>
                <input className="sectioninput" type="number" data-unit="%" id="take-up" name="take-up" min="1" max="99" value="10"/> <p className="unit"> %</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="shrinkage">Shrinkage: </label>
                <input className="sectioninput" type="number" data-unit="%" id="shrinkage" name="shrinkage" min="1" max="50" value="10"/><p className="unit"> %</p>
            </Formsection>
            <Formsection>
                <label className="sectionlabel" htmlFor="items">Nr of items: </label>
                <input className="sectioninput" type="number" id="items" name="items" min="1" max="99" placeholder="0"/>
            </Formsection>
            <Itemssection nrofitems={nrofitems}/>
            <Formsection>
                <label className="sectionlabel" htmlFor="total">Warp length: </label>
                <input className="sectioninput" type="number" id="total" name="total" min="1" max="10000" value="100"/>
                <p className="unit"> cm</p>
            </Formsection>



        </form>
)
}