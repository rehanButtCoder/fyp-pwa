"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <>
      {pathName !== "/login" ? (
        <div className="flexMain menu">
          <Link href="/products">Ads</Link>
          {/* <Link href="/filterbox">Ads</Link> */}
          <Link href="/order">Orders</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/profile">Map</Link>
          <Link href="/profile">Account</Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MainMenu;
