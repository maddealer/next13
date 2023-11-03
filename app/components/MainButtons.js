"use client";
import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });
function MainButtons(props) {
  const path = usePathname();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 15px",
        paddingBottom: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35px",
          width: "105px",
          borderBottom: `${
            path === "/btts" ? "4px solid #ff7a00" : "1px solid #ff7a00"
          }`,
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: `${path === "/btts" ? "#c7d8be" : "#ffffff"}`,
        }}
      >
        <Link
          href="/btts"
          style={{
            textDecoration: "none",
            color: `${path === "/btts" ? "#000000" : "#000000"}`,
          }}
        >
          <span style={interFont.style}>BTTS</span>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35px",
          width: "105px",
          borderBottom: `${
            path === "/predictions" ? "4px solid #ff7a00" : "1px solid #ff7a00"
          }`,
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: `${path === "/predictions" ? "#c7d8be" : "#ffffff"}`,
        }}
      >
        <Link
          href="/predictions"
          style={{
            textDecoration: "none",
            color: `${path === "/predictions" ? "#000000" : "#000000"}`,
          }}
        >
          <span style={interFont.style}>Predictions</span>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35px",
          width: "105px",
          borderBottom: `${
            path === "/over25" ? "4px solid #ff7a00" : "1px solid #ff7a00"
          }`,
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: `${path === "/over25" ? "#c7d8be" : "#ffffff"}`,
        }}
      >
        <Link
          href="/over25"
          style={{
            textDecoration: "none",
            color: `${path === "/over25" ? "#000000" : "#000000"}`,
          }}
        >
          <span style={interFont.style}>U/O 2.5</span>
        </Link>
      </div>
    </div>
  );
}

export default MainButtons;
