import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from './cart-item';

const product = {
  title: 'product test',
  price: '22.00',
  image: 'test image',
};

const addToCart = jest.fn();

describe('<CartItem />', () => {
  it('should render a CartItem', () => {
    render(<CartItem product={product} />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
