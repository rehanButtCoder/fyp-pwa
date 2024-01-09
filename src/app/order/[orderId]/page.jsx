"use client";
import { customStyles } from "@/components/datatable/DataTableStyle";
import Loader from "@/components/loader/Loader";
import useGetDataById from "@/hooks/fetchSingleData";
import { capitalizeFirstLetter } from "@/utils/functions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import DataTable from 'src/components/dataTables/DataTable';
// import Iconify from 'src/components/iconify';
// import useGetSingleProduct from 'src/utils/customHooks';
// import { capitalizeFirstLetter } from 'src/utils/functions';

const OrderSinglePage = ({ params }) => {
  const router = useRouter();

  // const data = useGetSingleProduct(state?.orderId);
  //   const [data, setData] = useState();
  const [modifiedArray, setModifiedArray] = useState();
  const [loder, setLoder] = useState(true);
  const data = useGetDataById(params.orderId, "singleOrder");

  useEffect(() => {
    const newArray = data?.orderPlan?.map((item) => ({
      ...item,
      id: item._id,
    }));
    setModifiedArray(newArray);
  }, [data?.orderPlan]);

  //   const newArray = data?.map((item) => item.orderData);

  console.log(modifiedArray);
  useEffect(() => {
    // debugger
    if (data) {
      setLoder(false);
    }
  }, [data]);

  const handleOpenMenu = (params) => {
    navigate(
      `/dashboard/orders/select-plan/order-status?id=${params.row.id}&amountToBePayed=${params.row.amountToBePayed}&productName=${params.row.productName}&total=${data?.totalDeposit}&month=${params.row.month}&orderId=${state?.orderId}`,
      {
        state: { orderPlan: data?.orderPlan },
      }
    );
  };
  //

  const onRowClicked = (order) => {
    // console.log(order);
    setTimeout(() => {
      //   router.push(`/order/${order._id}`);
    }, 100);
  };
  const columns = [
    {
      name: "No.",
      selector: (row) => row?.numbering,
      width: "70px",
    },
    {
      name: "ID",
      selector: (row) => row?.id,
      width: "220px",
    },
    {
      selector: (row) => row?.productName,
      name: "Product Name",
      width: "150px",
    },
    { selector: (row) => row?.month, name: "Months", width: "130" },
    {
      selector: (row) => row?.amountToBePayed,
      field: "amountToBePayed",
      name: "Amount to be Payed",
      width: "200px",
    },
    {
      name: "Status",
      width: "100px",
      cell: (row) => (
        <div style={{ color: "#0d6efd", fontWeight: "bold" }}>
          {capitalizeFirstLetter(row?.status)}
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{  fontWeight: "bold",border:"1px solid",borderRadius:"50%",padding:"5px 10px" }}>
          View
        </div>
      ),
      width: "90px",
    },
  ];

  return (
    <>
      {loder ? (
        <Loader />
      ) : (
        <>
          <h2
            onClick={() => router.push("/order")}
            style={{ fontWeight: "bold", fontSize: "30px", cursor: "pointer" }}
          >
            View Order :{params.orderId}
          </h2>
          <h3>
            Order Name:
            <span style={{ fontWeight: "400" }}>{data?.orderName}</span>
          </h3>
          <h3>
            Initial Deposit:{" "}
            <span style={{ fontWeight: "400" }}>{data?.initialDeposit}</span>
          </h3>
          <h3>
            Total Amount:{" "}
            <span style={{ fontWeight: "400" }}>{data?.totalDeposit}</span>
          </h3>
          <h3>
            Date: <span style={{ fontWeight: "400" }}>{data?.date}</span>
          </h3>
          <h3>
            Order Status:{" "}
            <span style={{ color: "#0d6efd", fontWeight: "bold" }}>
              {capitalizeFirstLetter(data?.orderStatus)}
            </span>
          </h3>
          <br />
          <div style={{ width: "100%" }}>
            <DataTable
              title="Order Plans"
              customStyles={customStyles}
              columns={columns}
              data={modifiedArray}
              onRowClicked={onRowClicked}
            />
          </div>
        </>
      )}
    </>
  );
};

export default OrderSinglePage;
