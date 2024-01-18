import './Cell.scss';


export function Cell(params: { color: string | undefined, id: string, }) {
    
    const { color, id, } = params
    let css=color?{ backgroundColor: color}:{}
    return <div className="cell" style={css} id = { id } ></div >
}