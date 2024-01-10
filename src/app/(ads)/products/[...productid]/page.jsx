/* eslint-disable react/jsx-key */
"use client";
import useGetDataById from "@/hooks/fetchSingleData";
import { backEndUrl } from "@/utils/constant";
import Image from "next/image";
// import { useEffect, useState } from "react";

const ProductSinglePage = ({ params }) => {
  // const [data, setData] = useState();
  const data = useGetDataById(params.productid, "product");
  // const newArray = data?.map((item) => item.orderData);
  console.log(data);
  // useEffect(() => {
  //   if (ifData) {
  //     setData(ifData);
  //   }
  // }, [ifData]);

  return (
    <div className="container">
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
