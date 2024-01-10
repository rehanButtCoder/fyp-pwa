/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import style from "./query.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

const Notifications = () => {
  const loggedInUserData = useSelector((state) => state.user.userData?.data);

  const data = [
    { head: "head test", descrp: "test description" },
    { head: "head test", descrp: "test description" },
    { head: "head test", descrp: "test description" },
    { head: "head test", descrp: "test description" },
  ];
  return (
    <div className="container">
      <br />
      <h1>Notifications</h1>
      <br />
      {loggedInUserData
        ? data.map((item) => {
            return (
              <Link className={style.notification} href="/">
                <div>
                  {/* <Image
                className="sizeSet"
                src={backEndUrl + userData?.cnicImageUrl[0]}
                width={211}
                height={211}
                alt="Picture of the author"
              /> */}
                </div>
                <div className="ml25">
                  <h5 className={style.notificationH5}>
                    {item.head}
                    {/* {item?.notification_from?.first_name.charAt(0)?.toUpperCase() +
              item?.notification_from?.first_name?.slice(1)} */}
                  </h5>
                  <p className={style.notificationP}>
                    {item.descrp} &nbsp;
                    <span className={style.green}>View More</span>
                  </p>
                </div>
              </Link>
            );
          })
        : " No Notifications"}
      <br />
      <br />
    </div>
  );
};

export default Notifications;
