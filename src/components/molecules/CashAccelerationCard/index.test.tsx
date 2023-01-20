import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CashAccelerationCard from './index'

describe('Cash Acceleration Card Tests', () => {
  it('renders CashAccelerationCard component', () => {
    const { container } = render(
      <CashAccelerationCard
        icon={'/icons/document-download.svg'}
        title={'Available credit'}
        content={'$880.0k'}
      />
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('Checking styles', () => {
    render(
      <CashAccelerationCard
        icon={'/icons/document-download.svg'}
        title={'Available credit'}
        content={'$880.0k'}
      />
    )
    const card = screen.getByTestId('cashAcceleration-card')
    expect(card).toHaveStyle(
      'height: 100%;width: 100%;background-color: rgb(32,31,36);'
    )
    const icon = screen.getByTestId('cashAcceleration-icon')
    expect(icon).toHaveStyle('background-color: rgb(38,37,41);')
  })
})
