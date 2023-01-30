import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AvatarComponent } from '.'

it('Check for Illustration', async () => {
  render(<AvatarComponent source={'../../../../public/logo/Rectangle 554.png'} alt={'avatar'} variant="rounded"/>)
  const MuiElement = screen.getByRole('img')
  expect(MuiElement).toBeInTheDocument()
})
