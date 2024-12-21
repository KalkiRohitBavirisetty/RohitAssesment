// src/components/Spinner.jsx
import React from 'react';

const Spinner = () => <div className="spinner">Loading...</div>;

const withSpinner = (Component) => ({ isLoading, ...props }) => {
  if (isLoading) return <Spinner />;
  return <Component {...props} />;
};

export default withSpinner;
