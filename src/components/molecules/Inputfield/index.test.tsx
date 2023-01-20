import React from 'react'
import { fireEvent } from '@storybook/testing-library'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputField from '.'

test('Testing Input Field', () => {
  render(
    <InputField
      startIcon="../../../../public/logo/direct-notification.svg"
      placeHolder={'Enter Cash kick name'}
      value={'test'}
      handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
    />
  )
  const text = screen.getAllByPlaceholderText(/Enter Cash kick name/i)[0]
  fireEvent.change(text)
  const MuiElement = screen.getByRole('img')
  expect(MuiElement).toBeInTheDocument()
})