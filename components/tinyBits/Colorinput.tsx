'use client'
export function Colorinput(params:{id:string, label:string, clickhandler:(e:React.ChangeEvent<HTMLInputElement>)=>void}){
    const {id, label, clickhandler}=params
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id}  type="color" onChange={(e)=>{clickhandler(e)}} />
        </>
    )
}