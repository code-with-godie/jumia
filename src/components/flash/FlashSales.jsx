import React from 'react';
import ProductList from '../products/ProductList';
import { getRandomNumbers } from '../lib/lib';
import { useState } from 'react';
import { useEffect } from 'react';
const FlashSales = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const space = [true, false];
    const tempShow = space[getRandomNumbers(0, 1)] || new Date().getDay() === 5;
    setShow(tempShow);
  }, []);
  if (show)
    return (
      <ProductList
        single
        flash
        title='Flash sales'
        noTitleBg='#EE2A23'
        category='flash'
      />
    );
};

export default FlashSales;
