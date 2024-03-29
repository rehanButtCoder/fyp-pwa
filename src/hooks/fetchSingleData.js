/* eslint-disable no-debugger */
/* eslint-disable import/no-unresolved */
import { getSingleOrder, getallCustomerOrders } from "@/services/orders/order";
import { getSingleProduct } from "@/services/products/product";
import { getSingleUser } from "@/services/users/user";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useGetDataById = (id, value) => {
  const [data, setData] = useState();

  const getFunc = async () => {
    try {
      let response;
      if (value === "user") {
        // debugger
        response = await getSingleUser(id);
      } else if (value === "order") {
        response = await getallCustomerOrders(id);
      } else if (value === "singleOrder") {
        response = await getSingleOrder(id);
      } else if (value === "product") {
        response = await getSingleProduct(id);
      }

      if (response.status === 200) {
        if (value === "order") {
          setData(response.data);
        } else {
          setData(response.data.data);
        }
      } else {
        // Swal.fire({
        //   title: response.data.message,
        //   timer: 1500,
        //   icon: "error",
        //   showConfirmButton: false,
        // });
      }
    } catch (error) {
      console.error("Error in getFunc:", error);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);

  return data;
};

export default useGetDataById;
