"use client";
import { userLoggingOut } from "@/redux/user/userSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const MainMenu = () => {
  const loggedInUserData = useSelector((state) => state.user.userData?.data);

  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = usePathname();
  // console.log(pathName);
  const logout = () => {
    dispatch(userLoggingOut());
    setTimeout(() => {
      router.push("/login");
    }, 50);
  };
  return (
    <>
      {pathName !== "/login" ? (
        <div className="flexMain menu">
          <Link href="/products">Products</Link>
          <Link href="/order">Orders</Link>
          {loggedInUserData && <Link href="/profile">Profile</Link>}
          <Link href="/map">Map</Link>
          {/* <Link href="/filterbox">Notifications</Link> */}
          <Link href="/notifications">Notifications</Link>
          {loggedInUserData ? (
            <Link href="" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MainMenu;
