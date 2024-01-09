'use client'
import { Draft } from '@/components/draft/draft/Draft'
import { ColorPicker } from '@/components/draft/forms/Colorpicker'
import { Header } from '@/components/zSharedComponents/Header'
import { ColorProvider } from '@/contexts/colorcontext'
export default function DraftPage() {

    const dataTemplate: string[][] = new Array(50).fill(new Array(20).fill('', 0))

    return (
        <div id='draft-page'>
            <Header title="Welcome to the draft creator!" text="Choose a color and click to fill in warp and treadling"></Header>
            <ColorProvider>
                <ColorPicker />
                <Draft />
            </ColorProvider>
        </div>
    )
}