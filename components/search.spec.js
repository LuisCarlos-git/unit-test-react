import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Search from './search';

const doSerach = jest.fn();
describe('<Search />', () => {
  it('should render a form', () => {
    render(<Search doSearch={doSerach} />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should call props.doSerach() when form submitted', async () => {
    render(<Search doSearch={doSerach} />);

    const form = screen.getByRole('form');

    await fireEvent.submit(form);

    expect(doSerach).toHaveBeenCalledTimes(1);
  });

  it('should call props.doSerach() with user input', async () => {
    render(<Search doSearch={doSerach} />);

    const form = screen.getByRole('form');
    const input = screen.getByRole('searchbox');

    const text = 'text';

    userEvent.type(input, text);

    fireEvent.submit(form);

    expect(doSerach).toHaveBeenCalledWith(text);
  });

  it('should call props.doSerach() with user input', async () => {
    render(<Search doSearch={doSerach} />);

    const form = screen.getByRole('form');
    const input = screen.getByRole('searchbox');

    const text = 'text';

    userEvent.type(input, text);

    fireEvent.submit(form);

    expect(doSerach).toHaveBeenCalledWith(text);
  });
});
