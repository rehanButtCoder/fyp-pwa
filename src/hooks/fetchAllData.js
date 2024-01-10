/* eslint-disable no-debugger */
/* eslint-disable import/no-unresolved */
import { getAllProducts } from "@/services/products/product";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useGetData = (value) => {
  const [data, setData] = useState();

  const getFunc = async () => {
    try {
      let response;
      if (value === "products") {
        response = await getAllProducts();
      }
      //    else if (value === "order") {
      //     response = await getallCustomerOrders(id);
      //   } else if (value === "singleOrder") {
      //     response = await getSingleOrder(id);
      //   }

      if (response.status === 200) {
        if (value === "products") {
          setData(response.data.data);
        }
        // else {
        //   setData(response.data.data);
        // }
      } else {
        Swal.fire({
          title: response.data.message,
          timer: 1500,
          icon: "error",
          showConfirmButton: false,
        });
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

export default useGetData;
