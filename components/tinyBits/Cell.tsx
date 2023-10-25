
import "./Cell.scss";
export function Cell(params:{color:string|undefined}){
    const {color}=params
    
    return <div className="cell" style={{backgroundColor:color}}></div>
}