import './page.scss'

import { Cell } from '@/components/tinyBits/Cell'
import { Colorinput } from '@/components/tinyBits/Colorinput'
import { logger } from '@/functions/logger'


export default function Home() {
  return (
    <main className={'main'}>
      <Cell color={'purple'} />
      <Colorinput id={'colorpick'} label={''} clickhandler={logger} />
    </main>
  )
}
