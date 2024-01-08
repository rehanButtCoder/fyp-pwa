import { userLoggingIn } from "@/redux/user/userSlice";
import { uploadImage } from "@/services/imageupload/uploadImage";
import { updateUser } from "@/services/users/user";
import { backEndUrl } from "@/utils/constant";
import { SingleImageUploader } from "@/utils/functions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UserUpdateModal = ({ userData, isOpen, closeModal, setModalIsOpen }) => {
    const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  // for user image
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState();
  // for front cncic image
  //   const [cnicFrontpicture, setCnicFrontPicture] = useState(null);
  //   const [cnicFrontImgData, setCnicFrontImgData] = useState();
  //   // for back cncic image
  //   const [cnicBackpicture, setCnicBackPicture] = useState(null);
  //   const [cnicBackImgData, setCnicBackImgData] = useState();

  console.log(userData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (fData) => {
    setLoader(true);
    const data = {
      fname: fData.fname,
      lname: fData.lname,
      email: fData.email,
      address: fData.address,
      phoneNumber: fData.phNumber,
    };

    if (picture) {
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
    }

    const resp = await updateUser(userData._id, data);
    if (resp?.status === 200) {
      Swal.fire({
        title: resp?.data?.message || "User Details Updated",
        timer: 2100,
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(() => {
        dispatch(userLoggingIn(resp.data));
        setLoader(false);
        setModalIsOpen(false);
      }, 2100);
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
  useEffect(() => {
    reset(userData);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Form Modal"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h3>User Details</h3>
          <h4 class="custom_heading">Profile Picture</h4>
          <SingleImageUploader
            setPicture={setPicture}
            setImgData={setImgData}
          />
          <div style={{ marginBottom: "15px" }}>
            {picture ? (
              <Image
                className="sizeSet"
                src={imgData}
                width={211}
                height={211}
                alt="Picture of the author"
                style={{ marginTop: "15px" }}
              />
            ) : (
              <Image
                style={{ marginTop: "15px" }}
                className="sizeSet"
                src={backEndUrl + userData.userImageUrl}
                width={211}
                height={211}
                alt="Picture of the author"
              />
            )}
          </div>
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
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phNumber && (
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
        </div>

        <br />
        {/* Add more form fields as needed */}
        <button
          style={{ backgroundColor: "#0d6efd" }}
          disabled={loader}
          type="submit"
        >
          Update
        </button>
      </form>
    </Modal>
  );
};

export default UserUpdateModal;
