"use client";
import "./global.css";
import mainStyles from "./page.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "../redux/counterSlice";
import axios from "axios";
import { allData } from "../redux/counterSlice";
import { counterState, data } from "../redux/counterSlice";
import { useState, useEffect } from "react";
// import CookieConsent from "react-cookie-consent";
import Image from "next/image";
// import Menu from "../Menu";

const Main = () => {
  const count = useSelector(counterState);
  console.log("count", count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("10");
  const [loading, setLoading] = useState(true);
  const dataLoadet = useSelector(data);
  console.log("data log", typeof dataLoadet);
  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
        params: {
          market: "classic",
        },
        headers: {
          "X-RapidAPI-Key":
            "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
          "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        dispatch(allData(response.data.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (dataLoadet === null) getData();
    else {
      setLoading(false);
    }
  }, [dataLoadet]);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className={mainStyles.ldsspinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className={mainStyles.main}>
          <button onClick={() => dispatch(decrement())}>[-1] DECREMENT</button>
          <button onClick={() => dispatch(increment())}>[+1] INCREMENT</button>
          <div className={mainStyles.box}>
            <div style={{ height: "100vh" }}>
              {/* <Menu /> */}
              <div className={mainStyles.text}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 10px",
                    marginBottom: "50px",
                  }}
                >
                  <h1
                    className={mainStyles.maintitle}
                    style={{ fontWeight: "normal" }}
                  >
                    Match Predictor
                  </h1>
                  <p className={mainStyles.mainp} style={{ marginTop: "20px" }}>
                    Is a Free & Simple Football Predictions App
                  </p>
                  <p className={mainStyles.mainp}>
                    Based on AI, Poisson probabilities and mathematical
                    calculations.
                  </p>
                </div>
                <div className={mainStyles.cardContainer}>
                  <Link href="predictions" className={mainStyles.link}>
                    <div
                      className={mainStyles.card}
                      style={{ position: "relative", zIndex: "5" }}
                    >
                      <a> Predictions</a>
                    </div>
                  </Link>

                  <Link href="crystal-ball" className={mainStyles.link}>
                    <div
                      className={mainStyles.card}
                      style={{ position: "relative", zIndex: "5" }}
                    >
                      <a> Crystal Ball</a>
                    </div>
                  </Link>
                </div>
                <div
                  className={mainStyles.cardContainer}
                  style={{ marginBottom: "30px" }}
                >
                  <Link href="btts" className={mainStyles.link}>
                    <div
                      className={mainStyles.card}
                      style={{ position: "relative", zIndex: "5" }}
                    >
                      BTTS
                    </div>
                  </Link>

                  <Link href="over25" className={mainStyles.link}>
                    <div
                      className={mainStyles.card}
                      style={{ position: "relative", zIndex: "5" }}
                    >
                      U/O 2.5
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Image
              className={mainStyles.b}
              src="/football.png"
              width={50}
              height={50}
              alt="ball"
            />
            <Image
              className={mainStyles.b1}
              src="/football.png"
              width={50}
              height={50}
              alt="ball"
            />
            <Image
              className={mainStyles.b2}
              src="/football.png"
              width={50}
              height={50}
              alt="ball"
            />
            <Image
              className={mainStyles.b3}
              src="/football.png"
              width={50}
              height={50}
              alt="ball"
            />

            {/* <div className={mainStyles.circle}></div> */}
          </div>

          {/* <CookieConsent
      style={{
        background: "rgba(60, 60, 60, 0.9)",
        textShadow: "2px 2px black",
        fontSize: "0.8em",
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent> */}
        </div>
      )}
    </>
  );
};

export default Main;
