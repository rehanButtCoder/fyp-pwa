/* eslint-disable no-debugger */
import axios from '../axios';

export const getAllUsers = async (fname) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`users?name=${fname}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getAllCustomers = async () => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get('users/customers', config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getSingleUser = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`users/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const updateUser = async (id, body) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.put(`users/update/${id}`, body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createUser = async (body) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.post('/users', body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteUser = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.delete(`users/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
