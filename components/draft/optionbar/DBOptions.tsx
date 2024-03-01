import { DbSaveWeave } from '@/components/draft/filehandler/Downloadweave'
import { DbLoadweave } from '@/components/draft/filehandler/Uploadweave'
export function FileOptions() {

    return (
        <>
            <DbSaveWeave />
            <DbLoadweave />
        </>
    )
}