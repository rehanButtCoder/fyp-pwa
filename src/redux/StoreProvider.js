// components/StoreProvider.js
import { store } from '@/app/store';
import React from 'react';
import { Provider } from 'react-redux';
// import { Provider } from '@reduxjs/toolkit';

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
