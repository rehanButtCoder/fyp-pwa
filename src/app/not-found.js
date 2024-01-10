"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h3 style={{ fontSize: "30px" }}>Page Not Found</h3>
      <p>
        Return back to{" "}
        <Link style={{ cursor: "pointer", fontWeight: "bold" }} href="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
