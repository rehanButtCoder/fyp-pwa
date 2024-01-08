import axios from '../axios';

export const getAllStats = async (id) => {
    try {
      // debugger
      const config = {
        headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('easyPayDashboard'))?.token}` },
      };
      const response = await axios.get(`dashboard-stats/${id}`, config);
      return response;
    } catch (err) {
      return err.response;
    }
  };