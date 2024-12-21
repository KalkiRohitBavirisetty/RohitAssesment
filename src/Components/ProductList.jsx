// src/components/ProductList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import ReviewForm from './ReviewForm';
import withSpinner from './Spinner';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' &&
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <ReviewForm productId={product.id} />
          </div>
        ))}
    </div>
  );
};

export default withSpinner(ProductList);
