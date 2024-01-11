import axios from '../axios';

export const findCordinates = async (body) => {
    try {
    //   debugger
      const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayPwa'))?.token}` },
      };
      const response = await axios.get('map/find-coordinates', config);
      return response;
    } catch (err) {
      return err.response;
    }
  };