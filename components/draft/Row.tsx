import './row.scss'

import { Cell } from './Cell';
export function Row(props: { content: string[], type: string, rownr: number }) {
    const mycontent = [...props.content]

    const { type, rownr } = props

    const rowCells = mycontent.map((item, index) => {
        //TODO: Handle empty item.
        return <Cell color={item} key={`${index}`} />
    })
    return <div className="row" id={`${type}-row-${rownr}`}>{rowCells} </div>
} 