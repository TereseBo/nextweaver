'use client'
import { ColorPicker } from '@/components/draft/colorpicker/Colorpicker'
import { Draft } from '@/components/draft/draft/Draft'
import { ProjectOptions } from '@/components/draft/ProjectOptions'
import { Header } from '@/components/zSharedComponents/Header'

export default function DraftPage() {

    return (
        <div id='draft-page'>
            <Header title="Welcome to the draft creator!" text="Choose a color and click to fill in warp and treadling"></Header>
                <ColorPicker />
                <Draft />
                <ProjectOptions/>
        </div>
    )
}