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
                <ul>
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
                  <li>
                    <Link href="/about" onClick={() => handleChange()}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" onClick={() => handleChange()}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" onClick={() => handleChange()}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacts" onClick={() => handleChange()}>
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
