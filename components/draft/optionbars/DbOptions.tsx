import { DbLoadWeave } from '@/components/draft/dbhandler/DbLoadWeave'
import { DbSaveWeave } from '@/components/draft/dbhandler/DbSaveWeave'
export function DbOptions() {

    return (
        <>
            <DbSaveWeave />
            <DbLoadWeave />
        </>
    )
}