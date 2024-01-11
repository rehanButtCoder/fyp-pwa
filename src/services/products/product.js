import axios from '../axios';

export const getAllProducts = async () => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get('product', config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getSingleProduct = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`product/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getallShopProducts = async (shopId, productName) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.get(`product/shop-products/${shopId}?productName=${productName}`, config);
    console.log(response);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const updateProduct = async (id, body) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.put(`product/${id}`, body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const createProduct = async (body) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.post('product', body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteProduct = async (id) => {
  try {
    // debugger
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
    };
    const response = await axios.delete(`product/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
