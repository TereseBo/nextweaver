'use-client'
import './grid.scss';

import { useContext } from 'react'

import { Row } from '@/components/draft/draft/Row'
import { ColorContext } from '@/contexts/colorcontext';
import { WeaveContext } from '@/contexts/weavecontext'

export function Grid(props: { content: grid, type: string, }) {
    const { updateCell } = useContext(WeaveContext) as WeaveContextType
    const { currentColor } = useContext(ColorContext) as ColorContextType
    function clickhandler(e) {
        console.log(e.target)
        console.log(currentColor)
        updateCell(e.target.id, currentColor)

    }

    const { type } = props

    const gridRows = props.content.map((item, index) => {
        //TODO: Handle empty item.
        return <Row content={item} key={`${type}-row-${index}`} rownr={index} type={type} />
    })


    return <div className="grid" key={type} id={`${type}-wrapper`} onClick={(e) => {type!='weave' && clickhandler(e)}}>{gridRows}</div>
}
