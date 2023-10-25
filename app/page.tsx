import styles from './page.module.css'
import {Cell} from '@/components/tinyBits/Cell'

export default function Home() {
  return (
    <main className={styles.main}>
    <Cell color={"purple"}/>
    </main>
  )
}
