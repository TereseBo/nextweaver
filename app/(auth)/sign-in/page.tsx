//Page for sign-in, only containing content required for signin provided by clerk


import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='signin_container'>
      <SignIn />
    </div>
  );
}