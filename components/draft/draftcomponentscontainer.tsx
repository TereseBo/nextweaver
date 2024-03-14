'use client'
import { ColorPicker } from '@/components/draft/colorpicker/Colorpicker'
import { Draft } from '@/components/draft/draft/Draft'
import { ProjectOptions } from '@/components/draft/optionbar/ProjectOptions'
export function Draftcomponentcontainer(){
    return(
        <>
        <ColorPicker />
        <Draft />
        <ProjectOptions/>
        </>
    )
}