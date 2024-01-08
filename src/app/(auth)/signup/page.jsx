"use client";
import {
  registerUser,
  sendResetMail,
  sendVerificationMail,
} from "@/services/auth/auth";
import { uploadImage } from "@/services/imageupload/uploadImage";
import { SingleImageUploader } from "@/utils/functions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const router = useRouter();

  const [loader, setLoader] = useState(false);
  // for user image
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState();
  // for front cncic image
  const [cnicFrontpicture, setCnicFrontPicture] = useState(null);
  const [cnicFrontImgData, setCnicFrontImgData] = useState();
  // for back cncic image
  const [cnicBackpicture, setCnicBackPicture] = useState(null);
  const [cnicBackImgData, setCnicBackImgData] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (fData) => {
    if (picture && cnicBackpicture && cnicFrontpicture) {
      const data = {
        fname: fData.fname,
        lname: fData.lname,
        email: fData.email,
        address: fData.address,
        phoneNumber: fData.phNumber,
        password: fData.password,
        confirmPassword: fData.confirmPassword,
        role: "customer",
      };

      const formDataImg = new FormData();
      formDataImg.append("image", picture);
      const imageResponse = await uploadImage(formDataImg);
      if (imageResponse?.status === 200) {
        data.userImageUrl = imageResponse.data.filename;
      } else {
        Swal.fire({
          title: imageResponse.data.message,
          timer: 2500,
          icon: "error",
          showConfirmButton: false,
        });
        setLoader(false);
      }
      // front image
      const formDataImg1 = new FormData();
      const formDataImg2 = new FormData();
      formDataImg1.append("image", cnicFrontpicture);
      const imageResponse1 = await uploadImage(formDataImg1);
      formDataImg2.append("image", cnicBackpicture);
      const imageResponse2 = await uploadImage(formDataImg2);
      if (imageResponse1?.status === 200 && imageResponse2?.status === 200) {
        data.cnicImageUrl = [
          imageResponse1.data.filename,
          imageResponse2.data.filename,
        ];
      } else {
        Swal.fire({
          title: imageResponse1.data.message,
          timer: 2500,
          icon: "error",
          showConfirmButton: false,
        });
        setLoader(false);
      }
      const resp = await registerUser(data);
      if (resp?.status === 200) {
        const data1 = {
          email: data.email,
        };
        const resp = await sendVerificationMail(data1);
        if (resp?.status === 200) {
          Swal.fire({
            title:
              resp?.data?.message ||
              "Verification Link sent.Please verify your account.",
            timer: 2100,
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(() => {
            router.push(`/resendemailverification?id=${data.email}`);
          }, 2500);
        } else {
          setLoader(false);
          Swal.fire({
            title: resp?.data?.message || "Server Error",
            timer: 1500,
            icon: "error",
            showConfirmButton: false,
          });
        }
      } else {
        setLoader(false);
        Swal.fire({
          title: resp?.data?.message || "Server Error",
          timer: 1500,
          icon: "error",
          showConfirmButton: false,
        });
      }
    } else {
      Swal.fire({
        title: "Upload all the Images!",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };
  return (
    <div>
      <div className="container custom_container">
        <div className="">
          <div className="">
            <h3 class="custom_heading">Profile Picture</h3>
            <SingleImageUploader
              setPicture={setPicture}
              setImgData={setImgData}
            />
            <div className="marginTB14">
              {imgData && (
                <Image
                  className="sizeSet"
                  src={imgData}
                  width={211}
                  height={211}
                  alt="Picture of the author"
                />
              )}
            </div>
          </div>
          <div className="">
            <div className="">
              <div className=" ">
                <h3>CNIC front Image</h3>
                <SingleImageUploader
                  setPicture={setCnicFrontPicture}
                  setImgData={setCnicFrontImgData}
                />
                <div className="marginTB14">
                  {cnicFrontImgData && (
                    <Image
                      className="sizeSet"
                      src={cnicFrontImgData}
                      width={211}
                      height={211}
                      alt="Picture of the author"
                    />
                  )}
                </div>
              </div>
              <div className=" ">
                <h3>CNIC back Image</h3>

                <SingleImageUploader
                  setPicture={setCnicBackPicture}
                  setImgData={setCnicBackImgData}
                />
                <div className="marginTB14">
                  {cnicBackImgData && (
                    <Image
                      className="sizeSet"
                      src={cnicBackImgData}
                      width={211}
                      height={211}
                      alt="Picture of the author"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User account_detail_section  */}
      <div className="container">
        <h3>User Details</h3>
        <div className="flexMain">
          <div className="">
            <label for="">First Name</label>
            <div className="input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control "
                placeholder="First Name"
                {...register("fname", { required: true })}
              />
              {errors.fname && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="">
            <label for="">Last Name</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                {...register("lname", { required: true })}
              />
              {errors.lname && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
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
            <label for="">Phone No</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="number"
                className="form-control"
                placeholder="+92000000000"
                {...register("phNumber", { required: true })}
              />
              {errors.phNumber && (
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
                placeholder="+92000000000"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
          <div className="">
            <label for="">Confirm Password</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="password"
                className="form-control"
                placeholder="+92000000000"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
          <div className="">
            <label for="">Address</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                {...register("address", { required: true })}
              />
              {errors.address && (
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
          Create Account
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SignUp;
