'use client'
import Box from "@/components/box/Box";
import { useRouter } from "next/navigation";

const FilterBoxPage = () => {
    const router = useRouter()
  const handleClick = (value) => {
    console.log(value);
    // router.push("/dashboard/products", {
    //   state: { query: value, defaultValue: value },
    // });
  };
  return (
    <div className="container">
      <h2>Choose Plan</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <Box sixMonth="6 Months" argument="6" onClickHandler={handleClick} />
        <Box oneYear="1 Year" argument="12" onClickHandler={handleClick} />
        <Box twoYears="2 Years" argument="24" onClickHandler={handleClick} />
        <Box threeYears="3 Years" argument="36" onClickHandler={handleClick} />
      </div>
    </div>
  );
};

export default FilterBoxPage;
