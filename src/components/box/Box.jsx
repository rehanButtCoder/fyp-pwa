"use client";

const Box = (props) => {
  const style = {
    width: "300px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F4F6F8",
    color: "#525A63",
    cursor: "pointer",
    border: "1px solid rgba(145, 158, 171, 0.16)",
  };

  // .mainBox {
  //   display: flex;
  //   justify-content: space-evenly;
  // }

  return (
    <div >
      <button
        onClick={() => {
          props.onClickHandler(props.argument);
        }}
        className={style}
      >
        <h1>
          {props.shopkeepers}
          {props.customers}
          {props.sixMonth}
          {props.oneYear}
          {props.twoYears}
          {props.threeYears}
        </h1>
      </button>
    </div>
  );
};

export default Box;
