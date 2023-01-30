import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Chip from './index'

describe('Chip Tests', () => {
  it('renders the chip component', () => {
    const { container } = render(<Chip variant={'loading'} content={''} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
