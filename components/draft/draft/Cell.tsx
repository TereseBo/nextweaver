import './Cell.scss';


export function Cell(params: { color: color, id: string, }) {
    
    const { color, id, } = params
    let css=color!=''?{ backgroundColor: color}:{}
    return <div className="cell" style={css} id = { id } ></div >
}