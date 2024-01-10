"use client";
import { customStyles } from "@/components/datatable/DataTableStyle";
import Loader from "@/components/loader/Loader";
import useGetDataById from "@/hooks/fetchSingleData";
import { capitalizeFirstLetter } from "@/utils/functions";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const Order = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.user.userData?.data);

  const [loder, setLoder] = useState(false);
  //   const [data, setData] = useState([]);

  const columns = [
    {
      name: "Order Name",
      selector: (row) => row?.orderName,
      //   hide: "sm",
      width: "150px",
    },
    {
      name: "Order Plan",
      selector: (row) => row?.orderPlan.length,
      //   selector: (row) => "$" + row?.orderPlan.length,
    },
    {
      name: "Total Deposit",
      selector: (row) => row?.totalDeposit,
      //   selector: (row) => moment(row?.task?.start_date).format("L"),
      width: "150px",
    },
    {
      name: "Initial Deposit",
      selector: (row) => row?.initialDeposit,
      width: "150px",
    },
    {
      name: "Date",
      selector: (row) => row?.date,
      width: "130px",
    },
    {
      name: "Status",
      button: true,
      cell: (row) => (
        <div style={{ color: "#0d6efd", fontWeight: "bold" }}>
          {capitalizeFirstLetter(row?.orderStatus)}
        </div>
      ),
      //   cell: (row) => <button className="viewOnly">View</button>,
      width: "150px",
    },
  ];

  const onRowClicked = (order) => {
    // console.log(order);
    setTimeout(() => {
      router.push(`/order/${order._id}`);
    }, 100);
  };

  const data = useGetDataById(userData?._id, "order");
  const newArray = data?.map((item) => item.orderData);
  //   console.log(newArray);

  return (
    <div className="container">
      {loder ? (
        <div className="">
          <Loader />
        </div>
      ) : (
        <DataTable
          title="My Orders"
          customStyles={customStyles}
          columns={columns}
          data={newArray}
          onRowClicked={onRowClicked}
          //   className="customerProfileTaskHistory"
        />
      )}
    </div>
  );
};

export default Order;
