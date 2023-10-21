"use client";
import React, { useState } from "react";
import Link from "next/link";
import Football from "../../public/football.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css";
import Image from "next/image";
import localFont from "next/font/local";
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });
export default function Menu(props) {
  const [check, setCheck] = useState(false);
  const handleChange = () => setCheck(!check);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <Link
            href="/"
            style={{ padding: "0", marginLeft: "10px", color: "#ffffff" }}
          >
            <FontAwesomeIcon icon={faHome} size="xl" />
          </Link>
          <span style={dayseOne.style} className={styles.title}>
            {" "}
            Match Predictor
          </span>
          <div
            className={styles[("container", "nav-container")]}
            style={{ width: "30px" }}
          >
            <label htmlFor="check" style={{ display: "none" }}></label>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="check"
              id=""
              checked={check}
              onClick={() => handleChange()}
              readOnly
            />
            <div
              className={styles["hamburger-lines"]}
              style={{ marginTop: "4px" }}
            >
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>

            <div
              className={styles["menu-items"]}
              style={{ padding: "0", backgroundColor: "#e9e9e9" }}
            >
              <>
                <ul
                  style={{
                    padding: "0",
                    marginTop: "0",
                    marginBottom: "5px",
                  }}
                >
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/"
                      onClick={() => handleChange()}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/predictions"
                      onClick={() => handleChange()}
                    >
                      Predictions
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/crystal-ball"
                      onClick={() => handleChange()}
                    >
                      Crystal Ball
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/about"
                      onClick={() => handleChange()}
                    >
                      About
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/terms"
                      onClick={() => handleChange()}
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li
                    style={{
                      borderBottom: "1px solid #bfbfbf",
                      padding: "5px 0",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/privacy"
                      onClick={() => handleChange()}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li
                    style={{
                      paddingTop: "5px",
                      marginBottom: "0",
                    }}
                  >
                    <Link
                      style={{ color: "#999898" }}
                      href="/contacts"
                      onClick={() => handleChange()}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
