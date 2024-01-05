//Contains tests of calculator page content
import { render, screen } from '@testing-library/react'

import { Warplengthform } from '@/components/calculator/Warplengthform'

import '@testing-library/jest-dom'
//TODO: Add tests for formfunction
//Tests for warplength form contents 
describe('Renders form', () => {

    it('renders the form', () => {
        render(<Warplengthform />)

        const form = screen.getAllByRole('form')
        expect(form.length).toBe(1)
        expect(form[0]).toBeInTheDocument()
    })

    it('renders expected input', () => {
        render(<Warplengthform />)

        const inputs: HTMLInputElement[] = screen.getAllByRole('spinbutton', {})
        expect(inputs.length).toBe(6)


       // console.log(inputs)
        let val: number | undefined = undefined
        let total = inputs.find(item => { return item.name ==='total'})
        let totalVal= total? Number(total.value):0
        console.log(total)
        const values = inputs.map(item => {
            (['total', 'shrinkage', 'take_up', 'items'].includes(item.name)) ? val = 0 : val = Number(item.value)
            return val
        })
        const sum = values.reduce((a, b) => a + b, 0)
        console.log(values)
        expect(sum).toBe(Number(totalVal))
    })
})

//Tests for interactions with form
/* describe('content', () => {
    
    it('', () => {
  */
