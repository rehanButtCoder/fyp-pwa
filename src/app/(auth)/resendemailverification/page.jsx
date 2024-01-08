"use client";

import Swal from "sweetalert2";
import { sendVerificationMail } from "@/services/auth/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ResendMailPage = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (fData) => {
    const data = {
      email: fData.email,
    };
    const resp = await sendVerificationMail(data);
    if (resp?.status === 200) {
      Swal.fire({
        title: resp?.data?.message || "Email Link Sent!",
        timer: 1500,
        icon: "success",
        showConfirmButton: false,
      });
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
    <>
      {/* <div class="custom_img1">
        <img src={img1} alt="img" />
      </div> */}
      <h1 class="heading">Did not recieved your verification link?</h1>
      <div class="custom_fields">
        <label for="">Please enter your email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="customer@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}{" "}
      </div>
      <div class="custom_button">
        <button disabled={loader} onClick={handleSubmit(onSubmit)}>
          Send Link Again
        </button>
      </div>
    </>
  );
};

export default ResendMailPage;
