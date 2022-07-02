import App from './App'
import { render, screen, userEvent } from '@/utils/test-utils'

describe('app should render', () => {
  it('app render', () => {
    render(<App />)

    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })
  it('button can click', async () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('count is: 0')
    await userEvent.click(button)
    expect(button).toHaveTextContent('count is: 1')
  })
})
