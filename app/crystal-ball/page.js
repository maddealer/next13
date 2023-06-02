"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import { data } from "../../redux/predictionsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFutbolBall,
  faTrophy,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { getCountryCode } from "../../utils/getCountryCode";
import Menu from "../components/Menu";
import crystalStyles from "./CrystalBall.module.css";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from "../components/Footer";

const CrystalBall = () => {
  const [localData, setLocalData] = useState();
  const [btts, setBtts] = useState();
  const [triple, setTriple] = useState([]);
  const [accumulator, setAccumulator] = useState(0);
  const [zone, setZone] = useState("");
  const [msg, setMsg] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  // const data1 = useSelector(data);
  // useEffect(() => {
  //   if (data1) {
  //     setLocalData(data1);
  //     console.log(localData);
  //   }
  // }, [data1]);
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setZone(timeZone);
    // console.log("zone", zone);
  }, [zone]);
  useEffect(() => {
    const getClassic = async (id) => {
      const options = {
        method: "GET",
        url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
        params: { market: "classic" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        // setData(response.data.data[0]);
        // console.log(response.data.data);
        let withOdds = response.data.data.filter((a) => {
          // console.log(a.odds[a.prediction]);
          return a.odds[a.prediction] !== null;
        });
        setLocalData(withOdds);
        console.log(data1);
      } catch (error) {
        console.log(error);
      }
    };
    getClassic();
  }, []);
  useEffect(() => {
    const getBtts = async (id) => {
      const options = {
        method: "GET",
        url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
        params: { market: "btts" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        // setData(response.data.data[0]);
        // console.log(response.data.data);
        let withOdds = response.data.data.filter((a) => {
          // console.log(a.odds[a.prediction]);
          return a.odds[a.prediction] !== null;
        });
        setBtts(withOdds);
        console.log(data1);
      } catch (error) {
        console.log(error);
      }
    };
    getBtts();
  }, []);
  const triplef = () => {
    let output = new Set();
    if (localData.length < 3) {
      setMsg("Sorry, not enough predictions at the moment. ");
      return;
    }
    // console.log(localData.length < 3);
    while (output.size < 3) {
      const randomNumber = Math.floor(Math.random() * localData.length);
      output.add(randomNumber);
    }
    const fish = [
      localData[Array.from(output)[0]],
      localData[Array.from(output)[1]],
      localData[Array.from(output)[2]],
    ];
    fish.sort((a, b) => {
      if (a.start_date < b.start_date) {
        return -1;
      }
      if (a.start_date > b.start_date) {
        return 1;
      }
      return 0;
    });
    // console.log(fish);
    let acc = 1;
    for (const item of fish) {
      // console.log(item.odds[item.prediction]);
      if (item.odds[item.prediction] === null) return;
      acc = acc * item.odds[item.prediction];
    }
    setTriple(fish);
    setAccumulator(acc);
    setShowDiv(true);
    // console.log(output.size);
    // console.log(output);
  };
  const tripleBtts = () => {
    if (btts === undefined) return;

    let output = new Set();
    if (btts.length < 3) {
      setMsg("Sorry, not enough predictions at the moment. ");
      return;
    }
    // console.log(localData.length < 3);
    while (output.size < 3) {
      const randomNumber = Math.floor(Math.random() * btts.length);
      output.add(randomNumber);
    }
    const fish = [
      btts[Array.from(output)[0]],
      btts[Array.from(output)[1]],
      btts[Array.from(output)[2]],
    ];
    fish.sort((a, b) => {
      if (a.start_date < b.start_date) {
        return -1;
      }
      if (a.start_date > b.start_date) {
        return 1;
      }
      return 0;
    });
    // console.log(fish);
    let acc = 1;
    for (const item of fish) {
      // console.log(item.odds[item.prediction]);
      if (item.odds[item.prediction] === null) return;
      acc = acc * item.odds[item.prediction];
    }
    setTriple(fish);
    setAccumulator(acc);
    setShowDiv(true);
    // console.log(output.size);
    // console.log(output);
  };
  const convertTZ = (date, zone) => {
    const options = {
      month: "short",
      day: "numeric",
    };
    const optionshour = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return (
      new Date(date).toLocaleDateString("en-US", options) +
      " " +
      new Date(date).toLocaleTimeString("en-GB", optionshour)
    );
  };

  return (
    <>
      <div className={crystalStyles.bg}>
        <Menu />
        <div className={crystalStyles.header}>
          <h5 style={{ fontSize: "1.6em", margin: "0" }}>Crystal Ball</h5>
          <p
            style={{
              fontSize: "0.8rem",
              textShadow: "none",
              fontWeight: "bold",
            }}
          >
            Is a random generated Treble.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              textShadow: "none",
              fontWeight: "bold",
              padding: "0 15px",
            }}
          >
            If you dont know what to play, just ask the Crystal Ball.
          </p>{" "}
          <p
            style={{ fontSize: "0.8rem", color: "#505050", marginTop: "20px" }}
          >
            Click the Ball. Get your lucky Ticket.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src="/newballc.png"
              width={100}
              height={100}
              onClick={triplef}
              alt="menulogo"
            />
            {/* <img
            onClick={triplef}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
            }}
            src={classicBall}
            alt="glassBall"
          ></img> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Image
              src="/newballb.png"
              width={100}
              height={100}
              onClick={tripleBtts}
              alt="menulogo"
            />
            {/* <img
            onClick={tripleBtts}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
            }}
            src={bttsBall}
            alt="glassBall"
          ></img> */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {localData &&
          localData.length > 0 &&
          localData.length > 2 &&
          showDiv ? (
            <>
              {triple.map((element, index) => (
                <div className={crystalStyles.ticket} key={index}>
                  <div className={crystalStyles.dateMain}>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      {element.competition_cluster === "Champions League" ? (
                        <FontAwesomeIcon icon={faFutbol} size="2x" />
                      ) : element.competition_cluster === "Europa League" ? (
                        <FontAwesomeIcon icon={faTrophy} size="2x" />
                      ) : (
                        <div
                          style={{ width: "1.2rem", height: "1rem" }}
                          className={`fi fi-${getCountryCode(
                            element.competition_cluster
                          )}`}
                        ></div>
                      )}
                      &nbsp;&nbsp;&nbsp;
                      <div
                        className={crystalStyles.date}
                        style={{ fontSize: "1.1em" }}
                      >
                        {element.competition_cluster} -{" "}
                        {element.competition_name}{" "}
                      </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div
                      className={crystalStyles.date}
                      style={{
                        fontSize: "1.1em",
                        display: "flex",
                        justifyContent: "right",
                      }}
                    >
                      {" "}
                      {`${
                        zone !== ""
                          ? convertTZ(element.start_date + "+0000", zone)
                          : null
                      }`}{" "}
                    </div>
                  </div>

                  <div className={crystalStyles.rightData}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "left",
                        width: "84%",
                      }}
                    >
                      <p
                        className={crystalStyles.federation}
                        style={{ margin: "0" }}
                      >
                        {element.home_team}
                      </p>
                      <p
                        className={crystalStyles.federation}
                        style={{ fontSize: "0.6rem", margin: "0" }}
                      >
                        vs
                      </p>
                      <p
                        className={crystalStyles.federation}
                        style={{ margin: "0" }}
                      >
                        {element.away_team}
                      </p>
                    </div>
                    <div className={crystalStyles.leftData}>
                      <div className={crystalStyles.odds}>
                        {" "}
                        {element.market.toUpperCase()}{" "}
                        <div className={crystalStyles.odds}>
                          <b>{element.prediction.toUpperCase()}</b>
                        </div>
                      </div>
                      <div className={crystalStyles.odds}>
                        {" "}
                        {element.odds[element.prediction]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>{msg}</p>
          )}
          {accumulator !== 0 ? (
            <>
              <div className={crystalStyles.ticket}>
                <p
                  style={{
                    textShadow: "0.03em 0.03em #505050",
                    color: "#505050",
                    textAlign: "center",
                  }}
                >
                  -- Total Odds -- <br />{" "}
                  <span
                    style={{
                      textShadow: "0.03em 0.03em",
                      color: "#505050",
                      fontSize: "1.3em",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {accumulator.toFixed(2)}{" "}
                  </span>
                </p>
              </div>
              <br />
              <p style={{ fontSize: "0.7rem" }}>MatchPredictor.net</p>
              <p style={{ fontSize: "0.6rem" }}>
                *responsible betting. not financial advice
              </p>
            </>
          ) : null}
        </div>
        {!showDiv ? (
          <p
            style={{
              fontSize: "0.9rem",
              color: "#505050",
              marginTop: "20px",
              lineHeight: "2em",
              padding: "0 15px",
              textAlign: "center",
            }}
          >
            A Treble bet is where you take three single outright selections,
            often known as legs, <br /> that are combined into one multiple bet.{" "}
            <br />
            <br />
            Classic Treble bet is with 1, X, 2, 12, 1X, 2X options. <br />
            <br />
            BTTS is Both teams to score Treble bet.
          </p>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default CrystalBall;
