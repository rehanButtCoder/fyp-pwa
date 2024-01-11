"use client";
import UserUpdateModal from "@/components/modals/UserUpdateModal";
import useGetDataById from "@/hooks/fetchSingleData";
import { backEndUrl } from "@/utils/constant";
import { SingleImageUploader } from "@/utils/functions";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.user.userData.data);
  // console.log(userData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // const data = useGetDataById();
  // console.log(data);

  return (
    <div className="container">
      <div className="container custom_container">
        <div>
          <div className="editbtn-div">
            <button
              onClick={openModal}
              className=" btn btn-primary custom-button editbtn"
            >
              Edit Details
            </button>
          </div>
          <UserUpdateModal
            userData={userData}
            isOpen={modalIsOpen}
            closeModal={closeModal}
            setModalIsOpen={setModalIsOpen}
          />

          <h3 class="custom_heading heading2">Profile Picture</h3>
          {/* <SingleImageUploader
                setPicture={setPicture}
                setImgData={setImgData}
              /> */}
          <div className="marginTB14 sizeSet1">
            <Image
              className="sizeSet sizeSet1"
              src={backEndUrl + userData?.userImageUrl}
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
              <div className="marginTB14 sizeSet1">
                <Image
                  className="sizeSet sizeSet1"
                  src={backEndUrl + userData?.cnicImageUrl[0]}
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
              <div className="marginTB14 sizeSet1">
                <Image
                  className="sizeSet sizeSet1"
                  src={backEndUrl + userData?.cnicImageUrl[1]}
                  width={211}
                  height={211}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User account_detail_section  */}
      <div className="container">
        <h3 className="heading2">User Details</h3>
        <div className="flexMain">
          <div className="">
            <label for="">First Name</label>
            <div className="input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control "
                placeholder="First Name"
                value={userData?.fname}
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
                value={userData?.lname}
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
                value={userData?.email}
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
                value={userData?.phoneNumber}
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
                value={userData?.address}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Profile;
