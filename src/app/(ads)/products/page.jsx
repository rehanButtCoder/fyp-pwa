/* eslint-disable react/jsx-key */
"use client";
import Card from "@/components/card/Card";
import useGetData from "@/hooks/fetchAllData";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState();
  const ifData = useGetData("products");
  // const newArray = data?.map((item) => item.orderData);
  console.log(data);
  useEffect(() => {
    if (ifData) {
      setData(ifData);
    }
  }, [ifData]);

  return (
    <>
      <br />
      <div className="container flexMain" style={{ gap: "unset" }}>
        {data?.map((item) => {
          return <Card item={item} />;
        })}
      </div>
        <br />
        <br />
    </>
  );
};

export default Products;
