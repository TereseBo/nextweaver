'use client'
import { ColorPicker } from '@/components/draft/colorpicker/Colorpicker'
import { Draft } from '@/components/draft/draft/Draft'
import { ProjectOptions } from '@/components/draft/optionbars/ProjectOptions'
export function DraftContainer() {
    return (
        <>
            <ColorPicker />
            <Draft />
            <ProjectOptions />
        </>
    )
}