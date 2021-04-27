import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './product-card';

test('renders content', () => {
  const product = {
    title: 'Title',
    description: 'Description',
    category: 'Man Clothing',
    image: '',
    price: 30,
  };

  const component = render(
    <ProductCard product={product} goToProductPage={() => {}} />
  );
  console.log(component);
  component.getByText('Man Clothing');
});
