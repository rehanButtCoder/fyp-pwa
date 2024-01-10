"use client";

import { sendResetMail } from "@/services/auth/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// import img1 from "../images/Forgot password.png";
function ForgetPage() {
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
    const resp = await sendResetMail(data);

    debugger
    if (resp?.status === 200) {
      Swal.fire({
        title: resp?.data?.message || "Forgot Page Link sent.Please check your inbox",
        timer: 1500,
        icon: "success",
        showConfirmButton: false,
      });
    } else {
      setLoader(false);
      Swal.fire({
        title: resp?.data?.message || "Server Error",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div class="main">
      {/* <div class="custom_img1">
        <img src={img1} alt="img" />
      </div> */}
      <h1 class="heading">Find Your Account</h1>
      <div class="custom_fields custom_fields1">
        <label for="">Please enter your email address</label>
        <input
          type="email"
          className="form-control form-control1"
          placeholder="customer@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}{" "}
      </div>
      <div class="custom_button">
        <button className="resetpass_btn" disabled={loader} onClick={handleSubmit(onSubmit)}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
export default ForgetPage;
