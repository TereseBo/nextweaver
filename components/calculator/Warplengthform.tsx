'use client'
import './warplengthform.scss'

import {useState} from 'react'

import { Formsection } from './Formsection'
import { Itemssection } from './Itemssection'

export function Warplengthform(){
    const [nrofitems, setNrofitems]=useState(0)
return(
    <form className="info-form" id="warplength-form">
            <h3>Warp Length</h3>
            <Formsection>
                <label htmlFor="threads-heddle">Loom waste: </label>
                <input type="number" data-unit="cm" id="loom-waste" name="loom-waste" min="1" max="99" value="50"/> cm
            </Formsection>
            <Formsection>
                <label htmlFor="lash-on">Lashing on: </label>
                <input type="number" data-unit="cm" id="lash-on" name="lash-on" min="1" max="99" value="50"/> cm
            </Formsection>
            <Formsection>
                <label htmlFor="Take-up">Take-up: </label>
                <input type="number" data-unit="%" id="take-up" name="take-up" min="1" max="99" value="10"/> %
            </Formsection>
            <Formsection>
                <label htmlFor="shrinkage">Shrinkage: </label>
                <input type="number" data-unit="%" id="shrinkage" name="shrinkage" min="1" max="50" value="10"/> %
            </Formsection>
            <Formsection>
                <label htmlFor="items">Nr of items: </label>
                <input type="number" id="items" name="items" min="1" max="99" placeholder="0"/>
            </Formsection>
            <Itemssection nrofitems={nrofitems}/>
            <Formsection>
                <label htmlFor="total">Warp length: </label>
                <input type="number" id="total" name="total" min="1" max="10000" value="100"/>
                cm
            </Formsection>



        </form>
)
}