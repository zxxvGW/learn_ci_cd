import { render, screen } from '@/utils/test-utils'
import Counter from '../Counter'
describe('Counter Unit Test', () => {
  it('Counter should render', () => {
    render(<Counter />)
    const el = screen.getByText('Counter')
    expect(el).toBeInTheDocument()
  })
})
