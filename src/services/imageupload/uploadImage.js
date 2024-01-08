import axios from '../axios';

export const uploadImage = async (body) => {
  try {
    // debugger
    const response = await axios.post('upload-image', body);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchImage = async (filename) => {
  try {
    // debugger
    const response = await axios.get(`fetch-image/${filename}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
