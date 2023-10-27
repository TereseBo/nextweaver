import './page.scss'

import { Cell } from '@/components/draft/Cell'
import { Colorinput } from '@/components/forms/Colorinput'
import { logger } from '@/functions/logger'


export default function Home() {
  return (
    <main className={'main'}>
      <Cell color={'purple'} />
      <Colorinput id={'colorpick'} label={''} clickhandler={logger} />
    </main>
  )
}
