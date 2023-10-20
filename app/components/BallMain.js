"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import mainStyles from "../page.module.css";
import { redirect } from "next/navigation";
const BallMain = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [go, setGo] = useState(false);
  const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));
  useEffect(() => {
    async function makeRequest() {
      console.log("before");

      await delay();
      console.log("after");
      setGo(true);
    }
    if (isActive === true) {
      makeRequest();
    }
  }, [isActive]);
  useEffect(() => {
    if (go === true) redirect("/crystal-ball");
  }, [go]);
  const handleClick = async (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
    // await delay();
    // redirect("/crystal-ball");
  };

  return (
    <div>
      {/* className={isActive ? 'bg-salmon' : ''} onClick={handleClick} */}
      {/* <Link href="crystal-ball"> */}
      <Image
        src="/goldball.png"
        width={200}
        height={200}
        alt="menulogo"
        className={isActive ? mainStyles["ball"] : ""}
        onClick={handleClick}
      />
      {/* </Link> */}
    </div>
  );
};

export default BallMain;
