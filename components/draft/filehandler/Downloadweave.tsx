import { TextButton } from '@/components/zSharedComponents/TextButton'

export function Downloadweave(){

    function weaveDownloadHandler(){
        console.log('click')

    }

    return (
        <TextButton text="Download" onClick={weaveDownloadHandler}/>
    )

}