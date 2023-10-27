import './grid.scss';

import { Row } from '@/components/draft/Row'

export function Grid(props: { content: string[][], type: string }) {
    const mycontent = [...props.content]
    const { type } = props

    const gridRows = mycontent.map((item, index) => {
        //TODO: Handle empty item.
        return <Row content={item} key={`${type}-row-${index}`} rownr={index} type={type} />
    })


    return <div className="grid" key={type} id={`${type}-wrapper`}>{gridRows}</div>
}
