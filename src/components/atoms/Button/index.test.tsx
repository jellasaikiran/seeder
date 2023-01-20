import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ButtonComponent from '.'

describe('Button tests', () => {
  it('render button', () => {
    render(
      <ButtonComponent label={'Continue'} textVariant={undefined} onClick={() => window.alert('Hello!!')} textColor={''}/>
    )
    const button = screen.getByText('Continue')
    userEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})