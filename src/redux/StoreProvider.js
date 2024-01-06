'use client'
import { Provider } from 'react-redux';
import { store } from './store';
// import { Provider } from '@reduxjs/toolkit';

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
