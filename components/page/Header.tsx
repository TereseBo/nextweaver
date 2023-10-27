import './header.scss'

export function Header(params:{title:string, text:string}){
    const {title, text}= params
    return(
        <header className="nav-container">
            <h1>{title}</h1>
            <p>{text}</p>
            <nav className="nav-bar">
                <a>Calculator</a>
                <a>Settings</a>

            </nav>
        </header>
    )

}