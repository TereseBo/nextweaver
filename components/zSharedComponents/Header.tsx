import './header.scss'

import { auth, currentUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link'
 
export function Header(params:{title:string, text:string}){
     const { userId, sessionId, getToken } = auth();
    const bob=auth() 
    console.log(bob)
    const {title, text}= params
    return(
        <header className="nav-container">
            <h1>{title}</h1>
            <p>{text}</p>
            <nav className="nav-bar">
                <Link href="/weaver/calculator">Calculator</Link>
                <Link href="/weaver">Settings</Link>
                <Link href="/weaver/draft">Draft</Link>
                   <UserButton />
               {userId? <Link href={`/${userId}`}>Profile</Link>:<Link href="/sign-in">Sign in</Link>} 

            </nav>
        </header>
    )

}