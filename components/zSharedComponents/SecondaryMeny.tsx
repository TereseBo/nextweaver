import './SecondaryMenu.scss'

export function SecondaryMenu(  {  children,
}: {
    children:  React.ReactNode
}){

    return(
        <div className="secondary-menu">
        {children}
        </div>
    )

}