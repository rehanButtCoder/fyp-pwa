"use client";
import { userLoggingIn } from "@/redux/user/userSlice";
import { login } from "@/services/auth/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useDispatch();

  const router = useRouter();

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
      password: fData.pass,
    };
    const resp = await login(data);
    if (resp?.status === 200 && resp?.data?.data?.role === "customer") {
      dispatch(userLoggingIn(resp.data));
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
    <>
      {/* User account_detail_section  */}
      <div className="container container1">
        <h3 className="login_heading">User Login</h3>

        <div className="flexMain">
          <div className="">
            <label for="">Email</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="customer@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="">
            <label for="">Password</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("pass", { required: true })}
              />
              {errors.pass && (
                <span className="error">This field is required</span>
              )}
            </div>
            <p>
              {" "}
              <Link style={{ color: "#0d6efd" }} href="/forgetpass">
                Forget Password?{" "}
              </Link>
            </p>
          </div>
        </div>
        <button
          disabled={loader}
          onClick={handleSubmit(onSubmit)}
          className=" btn btn-primary custom-button"
        >
          Login
        </button>
      </div>
      <br />
      <br />
      <p style={{ textAlign: "center" }}>
        Dont have account?{" "}
        <Link style={{ color: "#0d6efd" }} href="/signup">
          Register Here
        </Link>
      </p>
    </>
  );
};

export default Login;
