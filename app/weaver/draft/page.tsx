'use client'

import { ColorPicker } from '@/components/largeBits/Colorpicker'
import { Draft } from '@/components/largeBits/Draft'
export default function DraftPage(){

    const dataTemplate:string[][]= new Array(50).fill(new Array(20).fill('',0))

    return (
        <div>
        Draftpage, good job
        <ColorPicker/>
        <button onClick={()=>console.log(dataTemplate)}>knappeliknapp</button>
        <Draft/>
        </div>
    )
}