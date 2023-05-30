"use client";
import React, { useState } from "react";
import Link from "next/link";
import Football from "../../public/football.png";
import styles from "./Menu.module.css";
import Image from "next/image";

export default function Menu(props) {
  const [check, setCheck] = useState(false);
  const handleChange = () => setCheck(!check);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <div className={styles[("container", "nav-container")]}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id=""
              checked={check}
              onClick={() => handleChange()}
              readOnly
            />
            <div className={styles["hamburger-lines"]}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <div
              className={styles.logo}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ padding: "0" }}>
                <Image
                  src="/football.png"
                  width={34}
                  height={34}
                  alt="menulogo"
                />
              </Link>
            </div>
            <div className={styles["menu-items"]}>
              <>
                <li>
                  <Link href="/" onClick={() => handleChange()}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/predictions" onClick={() => handleChange()}>
                    Predictions
                  </Link>
                </li>
                <li>
                  <Link href="/crystal-ball" onClick={() => handleChange()}>
                    Crystal Ball
                  </Link>
                </li>
                {/* <li>
                  <Link to="/about" onClick={() => handleChange()}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={() => handleChange()}>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" onClick={() => handleChange()}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" onClick={() => handleChange()}>
                    Contacts
                  </Link>
                </li> */}
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
