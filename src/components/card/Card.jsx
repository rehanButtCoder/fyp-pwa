import { backEndUrl } from "@/utils/constant";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div
      className="card"
      style={{
        marginBottom: "20px",
        width: "100%",
        maxWidth: "190px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Image
        className="productImg"
        src={backEndUrl + item?.coverImageUrl}
        width={211}
        height={150}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="Picture"
      />
      <div className="containerPic">
        <h4 style={{ textAlign: "left" }}>
          <b>{item?.productName}</b>
        </h4>
        <p>{item?.price}</p>
      </div>
    </div>
  );
};

export default Card;
