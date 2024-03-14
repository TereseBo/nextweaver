//Contains an optional nav-menu for later containing links for sign-in and such
import './userMenu.scss'

/* import { UserButton } from '@clerk/nextjs'; */
/* import { auth, } from '@clerk/nextjs'; */
/* import Link from 'next/link' */

export function UserMenu() {
  /*   const { userId } = auth(); */

    return (
        <div className='usermenu-container'>
{/*             {userId ? <Link className="icon" href={`/${userId}`}>Profile</Link> : <Link className="icon" href="/sign-in">Sign in</Link>}
            < UserButton /> */}
        </div>
    )
}