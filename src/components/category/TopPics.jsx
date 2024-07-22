import React from 'react';
import ProductList from '../products/ProductList';

const TopPics = () => {
  return (
    <ProductList
      single
      title='Top Picks For You'
      noTitleBg='#FEE2CC'
      category='top-picks'
      showless
    />
  );
};

export default TopPics;
