'use client'

import { useSelector } from "react-redux";

const MapPage = () => {
    const loggedInUserData = useSelector((state) => state.user.userData?.data);

  return (
    <div className='container'>
      Map Page
      <br />
     {!loggedInUserData ? <h2>Log in to load map and find near shops</h2> : ""} 
    </div>
  )
}

export default MapPage
