"use client";
import { verifyUser } from "@/services/auth/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

// async function getUserDetail(userId, token) {
//   // The `fetch` function is automatically memoized and the result
//   // is cached
//   const res = await fetch(`http://localhost:3001/verify-user/${userId}/${token}`);
//   return res.json();
// }

const Loader = ({ params }) => {
  const router = useRouter();

  // here params is an verification Named Array
  const userId = params.verification[1];
  const token = params.verification[2];

  const isUserVerifiedFunc = async () => {
    const resp = await verifyUser(userId, token);
    if (resp?.status === 200) {
      Swal.fire({
        title: resp.data.message || "User is Verified!",
        timer: 2000,
        icon: "success",
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      Swal.fire({
        title: "Server Error in verify user API",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    isUserVerifiedFunc();
  }, []);
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default Loader;
