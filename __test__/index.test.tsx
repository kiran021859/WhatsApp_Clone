import React from 'react'
//import { expect, it, describe } from 'vitest'    add globals:true in vitest.config file and "types": ["vitest/globals"] to tsconfig file
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import '@testing-library/jest-dom/vitest'
 
describe('Page', () => {
  it('page should say hello and button should render', ()=>{
    render(<Page />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument
    expect(heading).toHaveTextContent(/Hello/i)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument
    expect(button).toHaveTextContent(/dashboard/i)
  })

  
  
})



