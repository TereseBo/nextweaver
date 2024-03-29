//Page containing the point and click draft and it's associated forms

import './draftpage.scss'

import { DraftContainer } from '@/components/draft/DraftContainer'
import { Header } from '@/components/zSharedComponents/Header'

export default function DraftPage() {

    return (
        <div id='draft-page'>
            <Header title="Welcome to the draft creator!" text="Choose a color and click to fill in warp and treadling"></Header>
            <DraftContainer/>
        </div>
    )
}