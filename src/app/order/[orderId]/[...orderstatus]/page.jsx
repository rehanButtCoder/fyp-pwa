"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/functions";

const OrderStatusForm = ({ params }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  // const handleOpenMenu = (params) => {
  //   router.push(
  //     `/order/${as}/select-plan/order-status?id=${params.row.id}&amountToBePayed=${params.row.amountToBePayed}&productName=${params.row.productName}&total=${data?.totalDeposit}&month=${params.row.month}&orderId=${state?.orderId}`
  //     //   ,
  //     //   {
  //     //     state: { orderPlan: data?.orderPlan },
  //     //   }
  //   );
  // };
  console.log(params.orderstatus);
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (fData) => {
    const data = {
      email: fData.email,
      password: fData.pass,
    };
    const resp = await login(data);
    if (resp?.status === 200 && resp?.data?.data?.role === "customer") {
      // dispatch(userLoggingIn(resp.data));
      localStorage.setItem("easyPayPwa", JSON.stringify(resp.data));
      router.push("/");
    } else {
      setLoader(false);
      Swal.fire({
        title: resp?.data?.message || "Invalid Carendentials",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Status for {params.orderstatus[1]} Month </h3>

      <div className="flexMain">
        <div className="">
          <label for="">Product Name</label>
          <div className=" input-group mb-3 custom-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="customer@gmail.com"
              {...register("productName", { required: true })}
              defaultValue={params.orderstatus[4]}
              readOnly
            />
            {errors.productName && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>

        <div className="">
          <label for="">Month</label>
          <div className=" input-group mb-3 custom-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="customer@gmail.com"
              {...register("month", { required: true })}
              defaultValue={params.orderstatus[1]}
              readOnly
            />
            {errors.month && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>

        <div className="">
          <label for="">Payment Status</label>
          <div className=" input-group mb-3 custom-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="customer@gmail.com"
              {...register("paymentStatus", { required: true })}
              defaultValue={capitalizeFirstLetter( params.orderstatus[2])}
              readOnly
            />
            {errors.paymentStatus && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>
        <div className="">
          <label for="">Amount</label>
          <div className=" input-group mb-3 custom-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="customer@gmail.com"
              {...register("amount", { required: true })}
              defaultValue={params.orderstatus[3]}
              readOnly
            />
            {errors.amount && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>
      </div>
      <button
        disabled={loader}
        onClick={handleSubmit(onSubmit)}
        className=" btn btn-primary custom-button"
      >
        Send Query
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OrderStatusForm;
