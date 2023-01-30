import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PaymentsTable } from '.'
import moment from 'moment'

describe('Payments Table Tests', () => {
  it('renders the table and tests Elements in it', () => {
    render(<PaymentsTable amount={[170454.55]} cashKickDate={[moment().format("MMMM Do, YYYY")]}/>)
    
    // const backButton = screen.getByTitle('Go to previous page')
    // fireEvent.click(backButton)
    // expect(backButton).toBeInTheDocument()

    // const nextButton = screen.getByTitle('Go to next page')
    // fireEvent.click(nextButton)
    // expect(nextButton).toBeInTheDocument()

    const text = screen.getAllByText('upcoming')
    expect(text[0]).toBeInTheDocument()

  })
})