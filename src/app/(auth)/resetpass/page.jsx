"use client";
// import img1 from "../images/Forgot password.png";
import Swal from "sweetalert2";
import { resetPass } from "@/services/auth/auth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ResetPage() {
  const router = useRouter();
  // use/router does not works in client component
  // so getting query value we have to use useEffect
  const [userID, setUserID] = useState();
  const [userToken, setUserToken] = useState();
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setUserID(urlParams.get("userId"));
    setUserToken(urlParams.get("userToken"));
  }, []);
  console.log(userID);
  console.log(userToken);
  // const userId = router.query.userId;
  // const userToken = router.query.userToken;

  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (fData) => {
    setLoader(false);
    const data = {
      token: userToken,
      email: fData.email,
      password: fData.password,
      password_confirmation: fData.conpassword,
    };
    const resp = await resetPass(data);
    if (resp?.status === 200) {
      Swal.fire({
        title: resp?.data?.message || "Password has been Updated!",
        timer: 2500,
        icon: "success",
        showConfirmButton: false,
      });

      router.push("/login");
    } else {
      setLoader(false);
      Swal.fire({
        title: resp?.data?.message || "Password has been Updated!",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      <h1 class="heading">Reset Your Password</h1>
      <div class="custom_fields1">
        <label for="">Email:</label>
        <input
          type="email"
          className="form-control form-control1"
          placeholder="customer@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
      </div>
      <div class="custom_fields1">
        <label for="">Type Password:</label>
        <input
          type="password"
          className="form-control form-control1"
          placeholder="customer@gmail.com"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div class="custom_fields1">
        <label for="">Re-type Password:</label>
        <input
          type="password"
          className="form-control form-control1"
          placeholder="customer@gmail.com"
          {...register("conpassword", { required: true })}
        />
        {errors.conpassword && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div class="custom_button2 custom_button">
        <button className="resetpass_btn " disabled={loader} onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </>
  );
}
export default ResetPage;
