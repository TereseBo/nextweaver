'use client'

import { Draft } from '@/components/draft/Draft'
import { ColorPicker } from '@/components/forms/Colorpicker'
export default function DraftPage() {

    const dataTemplate: string[][] = new Array(50).fill(new Array(20).fill('', 0))

    return (
        <div id='draft-page'>
            Draftpage, good job
            <ColorPicker />
            <button onClick={() => console.log(dataTemplate)}>knappeliknapp</button>
            <Draft />
        </div>
    )
}