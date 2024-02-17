//Page for sign-in, only containing content required for signin provided by clerk
import './page.scss'

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main id='signin'>
    <div className='signin_container'>
      <SignIn />
    </div>
    </main>
  );
}