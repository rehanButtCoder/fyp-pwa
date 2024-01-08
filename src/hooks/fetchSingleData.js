/* eslint-disable no-debugger */
/* eslint-disable import/no-unresolved */
import { getSingleUser } from '@/services/users/user';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const useGetDataById = (id) => {
  const [data, setData] = useState();

  const getFunc = async () => {
    try {
      let response;
      if (id) {
        response = await getSingleUser(id);
      }
      //  else {
      //   response = await getAllCustomers();
      // }

      if (response.status === 200) {
        setData(response.data.data);
      } else {
        Swal.fire({
          title: response.data.message,
          timer: 1500,
          icon: 'error',
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error('Error in getFunc:', error);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);

  return data;
};

export default useGetDataById ;
