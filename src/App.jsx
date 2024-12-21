// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from './contexts/ThemeContext';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ProductList />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
