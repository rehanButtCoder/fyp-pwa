"use client";

import Map from "@/components/map/Map";
import useGetData from "@/hooks/fetchAllData";
import { useSelector } from "react-redux";

const MapPage = () => {
  const loggedInUserData = useSelector((state) => state.user.userData?.data);
  const locations = useGetData("map");

  // markers
  // const locations1 = [
  //   {
  //     geocode: [48.86, 2.3522],
  //     popUp: "Hello, I am pop up 1",
  //   },
  //   {
  //     geocode: [48.85, 2.3522],
  //     popUp: "Hello, I am pop up 2",
  //   },
  //   {
  //     geocode: [48.855, 2.34],
  //     popUp: "Hello, I am pop up 3",
  //   },
  // ];

  return (
    <div className="container">
      Map Page
      <br />
      <br />
      {!loggedInUserData ? (
        <h2>Log in to load map and find near shops</h2>
      ) : (
        <Map locations={locations} />
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MapPage;
