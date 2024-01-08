"use client";
import useGetDataById from "@/hooks/fetchSingleData";
import { backEndUrl } from "@/utils/constant";
import { SingleImageUploader } from "@/utils/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.user.userData.data);
  console.log(userData);
  const [loader, setLoader] = useState(false);
  // for user image
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(true);
  // for front cncic image
  const [cnicFrontpicture, setCnicFrontPicture] = useState(null);
  const [cnicFrontImgData, setCnicFrontImgData] = useState();
  // for back cncic image
  const [cnicBackpicture, setCnicBackPicture] = useState(null);
  const [cnicBackImgData, setCnicBackImgData] = useState();

  //
  // const data = useGetDataById();
  // console.log(data);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {}, []);

  return (
    <div className="container">
      <>
        <div className="container custom_container">
          <div className="">
            <div className="">
              <button
                // disabled={loader}
                // onClick={handleSubmit(onSubmit)}
                className=" btn btn-primary custom-button"
              >
                Edit Details
              </button>
              <h3 class="custom_heading">Profile Picture</h3>
              {/* <SingleImageUploader
                setPicture={setPicture}
                setImgData={setImgData}
              /> */}
              <div className="marginTB14">
                <Image
                  className="sizeSet"
                  src={backEndUrl + userData.userImageUrl}
                  width={211}
                  height={211}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <div className=" ">
                  <h3>CNIC front Image</h3>
                  {/* <SingleImageUploader
                    setPicture={setCnicFrontPicture}
                    setImgData={setCnicFrontImgData}
                  /> */}
                  <div className="marginTB14">
                    <Image
                      className="sizeSet"
                      src={backEndUrl + userData.cnicImageUrl[0]}
                      width={211}
                      height={211}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className=" ">
                  <h3>CNIC back Image</h3>

                  {/* <SingleImageUploader
                    setPicture={setCnicBackPicture}
                    setImgData={setCnicBackImgData}
                  /> */}
                  <div className="marginTB14">
                    <Image
                      className="sizeSet"
                      src={backEndUrl + userData.cnicImageUrl[1]}
                      width={211}
                      height={211}
                      alt="Picture of the author"
                    />
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
                  value={userData.fname}
                  readOnly
                />
              </div>
            </div>

            <div className="">
              <label for="">Last Name</label>
              <div className=" input-group mb-3 custom-input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={userData.lname}
                  readOnly
                />
              </div>
            </div>
            <div className="">
              <label for="">Email</label>
              <div className=" input-group mb-3 custom-input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="customer@gmail.com"
                  value={userData.email}
                  readOnly
                />
              </div>
            </div>

            <div className="">
              <label for="">Phone No</label>
              <div className=" input-group mb-3 custom-input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="+92000000000"
                  value={userData.phoneNumber}
                  readOnly
                />
              </div>
            </div>
            <div className="">
              <label for="">Address</label>
              <div className=" input-group mb-3 custom-input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={userData.address}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </>
    </div>
  );
};

export default Profile;
