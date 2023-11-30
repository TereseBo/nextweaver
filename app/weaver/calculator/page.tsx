import { Warplengthform } from '@/components/calculator/Warplengthform'
import { Warpwidthform } from '@/components/calculator/Warpwidthform'
import { Header } from '@/components/zSharedComponents/Header'
export default function CalculatorPage() {
    return (
        <div id='calculator-page'>
            <Header title="Welcome to the calculator!" text="Start to fill in the form and it will update as you write." />
            Calculatorpage, good job
            <Warplengthform/>
            <Warpwidthform/>
        </div>
    )
}