import { fireEvent, render, screen } from '@testing-library/react';

import ProductCard from './product-card';

const product = {
  title: 'product test',
  price: '22.00',
  image: 'test image',
};

const addToCart = jest.fn();

describe('<ProductCart />', () => {
  it('should render a ProductCart', () => {
    render(<ProductCard product={product} addToCart={addToCart} />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    render(<ProductCard product={product} addToCart={addToCart} />);

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveStyle({
      'background-image': `url(${product.image})`,
    });
  });

  it('should call prop.addToCart when button clicked', () => {
    render(<ProductCard product={product} addToCart={addToCart} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
