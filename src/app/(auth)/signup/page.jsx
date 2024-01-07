import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="container custom_container">
        <div className="">
          <div className="">
            <h1 class="custom_heading">Profile Picture</h1>
            {/* <Image
              src=""
              width={500}
              height={500}
              alt="Picture of the author"
            /> */}
            <div>
              <button className="">
                Upload{" "}
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className=" ">
                <h1>CNIC front Image</h1>
                <button className="">
                  Upload{" "}
                </button>
              </div>
              <div className=" ">
                <h1>CNIC back Image</h1>
                <button className="">
                  Upload{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User account_detail_section  */}
      <div className="container custom_container">
        <h1>User Details</h1>
        <div className="row">
          <div className="col-md-6  ">
            <label for="">First Name</label>
            <div className="input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control "
                placeholder="First Name"
              />
            </div>
          </div>

          <div className=" col-md-6 ">
            <label for="">Last Name</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" col-md-6 ">
            <label for="">Email</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="customer@gmail.com"
              />
            </div>
          </div>

          <div className=" col-md-6 ">
            <label for="">Phone No</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="+92000000000"
              />
            </div>
          </div>
          <div className=" col-md-12 ">
            <label for="">Address</label>
            <div className=" input-group mb-3 custom-input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
          </div>

          <div>
            <button className=" btn btn-primary custom-button">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
