import { render, screen } from '@testing-library/react'

import { Warpwidthform } from '@/components/calculator/Warpwidthform'

import '@testing-library/jest-dom'
//TODO: Add tests for formfunction
//Tests for warpwidth form contents 

describe('Renders form', () => {

    it('renders the form', () => {
        render(<Warpwidthform />)

        const form = screen.getAllByRole('form')
        expect(form.length).toBe(1)
        expect(form[0]).toBeInTheDocument()
    })
})