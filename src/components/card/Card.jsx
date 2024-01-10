'use client'
import { backEndUrl } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ item }) => {
    const router = useRouter()

  const singleProductFunc = (item) => {
    router.push(`/products/${item._id}`);
  };
  return (
    <div
      onClick={() => {
        singleProductFunc(item);
      }}
      className="card"
      style={{
        marginBottom: "20px",
        width: "100%",
        maxWidth: "200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Image
        className="productImg"
        src={backEndUrl + item?.coverImageUrl}
        width={100}
        height={150}
        style={{
          width: "100%",
        }}
        alt="Picture"
      />
      <div className="containerPic">
        <h4 style={{ textAlign: "left" }}>
          <b>{item?.productName}</b>
        </h4>
        <p>Rs:{item?.price}/-</p>
      </div>
    </div>
  );
};

export default Card;
