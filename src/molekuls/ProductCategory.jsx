import React from 'react';
import SingleProductCategory from '../atoms/SingleProductCategory';

const ProductCategory = ({ data }) => {
  return (
    <>
      {data?.map((el, index) => (
        <SingleProductCategory key={index} name={el.category} />
      ))}
    </>
  );
};

export default ProductCategory;
