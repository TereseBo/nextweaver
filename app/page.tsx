import './page.scss'

import { redirect } from 'next/navigation'

import { Cell } from '@/components/draft/draft/Cell'
import { Colorinput } from '@/components/zSharedComponents/Colorinput'



export default function Home() {
  redirect('/weaver')
  //TODO:After implementing login, register and usercontent, reroute accordingly.
  return (
    <main className={'main'}>
      <Cell color={'purple'} />
      <Colorinput id={'colorpick'} label={''} clickhandler={console.log} />
    </main>
  )
}
