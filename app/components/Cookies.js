"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        position: "absolute",
        bottom: "0",
        zIndex: "5",
      }}
    >
      <div
        style={{
          width: "100%",

          background: "rgba(60, 60, 60, 0.8)",
          textShadow: "1px 1px 3px black",
          fontSize: "0.8em",
          padding: "10px 10px",
        }}
      >
        <div>
          <span style={{ color: "#ffffff" }}>
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our Cookie
            Policy.
          </span>
          <button style={{ marginLeft: "15px" }} onClick={() => acceptCookie()}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
