import styles from './page.module.css'
import {Cell} from '@/components/tinyBits/Cell'
import { Colorinput } from '@/components/tinyBits/Colorinput'
import { clicketyclack } from '@/clickhandlers/log'
export default function Home() {
  return (
    <main className={styles.main}>
    <Cell color={"purple"}/>
    <Colorinput id={'colorpick'} label={''} clickhandler={clicketyclack}/>
    </main>
  )
}
