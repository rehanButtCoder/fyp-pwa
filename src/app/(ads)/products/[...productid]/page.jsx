/* eslint-disable react/jsx-key */
"use client";
import useGetDataById from "@/hooks/fetchSingleData";
import { getSingleUser } from "@/services/users/user";
import { backEndUrl } from "@/utils/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

const ProductSinglePage = ({ params }) => {
  const loggedInUserData = useSelector((state) => state.user.userData?.data);

  const [userData, setUserData] = useState();
  const data = useGetDataById(params.productid, "product");

  console.log(loggedInUserData);
  const getSingleUserFunc = async (id) => {
    const resp = await getSingleUser(id);
    if (resp.status === 200) {
      setUserData(resp.data.data);
    }
  };
  useEffect(() => {
    if (data) {
      getSingleUserFunc(data?.shopkeeperId);
    }
  }, [data]);

  return (
    <div className="container">
      {!loggedInUserData && (
        <h3 style={{textAlign:"center"}}>
          (You have to be log in first to see shop address)
        </h3>
      )}
      <h3>Cover Image</h3>
      <Image
        className="productImg"
        src={backEndUrl + data?.coverImageUrl}
        width={300}
        height={300}
        alt="Picture"
      />
      <h3>Images</h3>
      <div className="flexMain">
        {data?.otherImagesUrl.map((item) => {
          return (
            <Image
              className="productImg"
              src={backEndUrl + item}
              width={130}
              height={100}
              alt="Picture"
            />
          );
        })}
      </div>
      <br />
      {loggedInUserData && userData?.address && (
        <h3>
          Shop Address:{" "}
          <span style={{ fontWeight: "400" }}>{userData?.address}</span>{" "}
        </h3>
      )}
      <h3>
        Product Name:{" "}
        <span style={{ fontWeight: "400" }}>{data?.productName}</span>{" "}
      </h3>
      <h3>
        Manufactured By:{" "}
        <span style={{ fontWeight: "400" }}>{data?.manufacturer}</span>
      </h3>
      <h3>
        Date: <span style={{ fontWeight: "400" }}>{data?.date}</span>
      </h3>
      {/* <h3>Warranty</h3> */}
      <h3>
        Price: <span style={{ fontWeight: "400" }}>{data?.price}</span>
      </h3>
      <h3>
        Material: <span style={{ fontWeight: "400" }}>{data?.material}</span>
      </h3>
      <h3>
        Product Description:{" "}
        <span style={{ fontWeight: "400" }}>{data?.description}</span>
      </h3>
      <h2>Plans </h2>
      <h3>
        {" "}
        <span style={{ textDecoration: "underline" }}>6 Months:</span> Initial
        Deposit is{" "}
        <span style={{ fontWeight: "400" }}> {data?.sixMonthDeposit}</span>.
        Total Amount is{" "}
        <span style={{ fontWeight: "400" }}>{data?.sixMonthPrice} </span>
      </h3>
      <h3>
        {" "}
        <span style={{ textDecoration: "underline" }}>12 Months:</span> Initial
        Deposit is{" "}
        <span style={{ fontWeight: "400" }}> {data?.oneYearDeposit}</span>.
        Total Amount is{" "}
        <span style={{ fontWeight: "400" }}>{data?.oneYearPrice} </span>
      </h3>
      <h3>
        {" "}
        <span style={{ textDecoration: "underline" }}>24 Months:</span> Initial
        Deposit is{" "}
        <span style={{ fontWeight: "400" }}> {data?.twoYearDeposit}</span>.
        Total Amount is{" "}
        <span style={{ fontWeight: "400" }}>{data?.twoYearPrice}</span>
      </h3>
      <h3>
        {" "}
        <span style={{ textDecoration: "underline" }}>36 Months:</span> Initial
        Deposit is{" "}
        <span style={{ fontWeight: "400" }}> {data?.threeYearDeposit}</span>.
        Total Amount is{" "}
        <span style={{ fontWeight: "400" }}>{data?.threeYearPrice}</span>
      </h3>
      <br />
      <br />
    </div>
  );
};

export default ProductSinglePage;
