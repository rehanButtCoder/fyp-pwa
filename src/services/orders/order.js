/* eslint-disable no-debugger */
import axios from '../axios';

export const getAllOrders = async () => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get('order', config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getSingleOrder = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`order/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getallCustomerOrders = async (customerId, orderName) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`order/customer-orders/${customerId}`, config);
    // const response = await axios.get(`order/customer-orders/${customerId}?orderName=${orderName}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getallShopOrders = async (shopId, orderName) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`order/shop-Orders/${shopId}?orderName=${orderName}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const updateOrder = async (id, body) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.put(`order/${id}`, body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createOrder = async (body) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.post('/order', body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteOrder = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.delete(`order/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
