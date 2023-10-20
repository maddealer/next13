"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import "../global.css";
import localFont from "next/font/local";
import Link from "next/link";
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });
const linksTo = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});

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
import backgroundImage from "../../public/goldball.png";
const CrystalBall = () => {
  const [localData, setLocalData] = useState();
  const [btts, setBtts] = useState();
  const [triple, setTriple] = useState([]);
  const [accumulator, setAccumulator] = useState(0);
  const [zone, setZone] = useState("");
  const [msg, setMsg] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [load1, setLoad1] = useState(true);
  const [load2, setLoad2] = useState(true);

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
        setLoad1(false);
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
        setLoad2(false);
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
      <div className={crystalStyles.main}>
        <div className={crystalStyles.box}>
          <div style={{ width: "100%", maxWidth: "860px" }}>
            <Menu />
            <div
              style={{
                // use the src property of the image object
                backgroundImage: `url(${backgroundImage.src})`,
                width: "100%",
                minHeight: "100vh",
                // other styles
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "0.4",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "50px",
                width: "100%",
                maxWidth: "860px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "15px 15px",
                }}
              >
                <div
                  style={{
                    height: "30px",
                    width: "105px",
                    borderBottom: "1px solid #ff7a00",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="btts"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <span style={linksTo.style}>BTTS</span>
                  </Link>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "105px",
                    borderBottom: "1px solid #ff7a00",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="predictions"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <span style={linksTo.style}>Predictions</span>
                  </Link>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "105px",
                    borderBottom: "1px solid #ff7a00",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="over25"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                    }}
                  >
                    <span style={linksTo.style}>U/O 2.5</span>
                  </Link>
                </div>
              </div>
              <div className={crystalStyles.header}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "0",
                    padding: "0 20px",
                    color: "#cfcccc",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0",
                      marginBottom: "5px",
                      fontSize: "1rem",
                      color: "#9cad9b",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <span style={linksTo.style}>DESCRIPTION</span>
                  </p>
                  <p
                    style={{
                      marginTop: "0",
                      fontSize: "0.9rem",
                      fontWeight: "200",
                      color: "#9cad9b",
                    }}
                  >
                    <span style={linksTo.style}>
                      One click - Three random selections - One bet
                    </span>
                  </p>
                </div>
                <p
                  style={{
                    color: "#d78821",
                    fontSize: "3rem",
                    marginBottom: "0",
                    marginTop: "0",
                  }}
                >
                  <span span style={dayseOne.style}>
                    Crystal Ball
                  </span>
                </p>
                <p
                  style={{
                    color: "#d78821",
                    fontSize: "3rem",
                    marginBottom: "0",
                    marginTop: "-10px",
                    fontWeight: "100",
                    letterSpacing: "20px",
                    paddingLeft: "20px",
                  }}
                >
                  <span style={linksTo.style}>WISDOM</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "40px",
                  margin: "25px 10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 1px #fb9b07",
                    width: "80px",
                    textAlign: "center",
                    backgroundColor: "#c7c6c496",
                  }}
                  onClick={triplef}
                >
                  {/* <Image
                        src="/newballc.png"
                        width={100}
                        height={100}
                        onClick={triplef}
                        alt="menulogo"
                      /> */}
                  CLASSIC
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "10px 20px",

                    width: "80px",
                    textAlign: "center",
                  }}
                >
                  {accumulator !== 0 ? (
                    <>
                      <p
                        style={{
                          color: "#d78821",
                          fontSize: "1.6rem",
                          marginBottom: "0",
                          marginTop: "0",
                        }}
                      >
                        <span span style={dayseOne.style}>
                          {accumulator.toFixed(2)}
                        </span>
                      </p>{" "}
                      <p
                        style={{
                          color: "#d78821",
                          fontSize: "1.1rem",
                          marginBottom: "0",
                          marginTop: "-5px",
                          letterSpacing: "1px",
                        }}
                      >
                        <span style={linksTo.style}>ODDS</span>
                      </p>
                    </>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 1px #fb9b07",
                    width: "80px",
                    textAlign: "center",
                    backgroundColor: "#c7c6c496",
                  }}
                  onClick={tripleBtts}
                >
                  {/* <Image
                        src="/newballb.png"
                        width={100}
                        height={100}
                        onClick={tripleBtts}
                        alt="menulogo"
                      /> */}
                  BTTS
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
              </div>{" "}
              {!load1 && !load2 ? (
                <>
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
                                {element.competition_cluster ===
                                "Champions League" ? (
                                  <FontAwesomeIcon icon={faFutbol} size="2x" />
                                ) : element.competition_cluster ===
                                  "Europa League" ? (
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
                                    ? convertTZ(
                                        element.start_date + "+0000",
                                        zone
                                      )
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
                    {/* {accumulator !== 0 ? (
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
                      </>
                    ) : null} */}
                  </div>

                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      marginTop: "-25px",
                    }}
                  >
                    <p style={{ fontSize: "0.6rem" }}>
                      *responsible betting. not financial advice
                    </p>
                  </div>
                  {/* {!showDiv ? (
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
                      A Treble bet is where you take three single outright
                      selections, often known as legs, <br /> that are combined
                      into one multiple bet. <br />
                      <br />
                      Classic Treble bet is with 1, X, 2, 12, 1X, 2X options.{" "}
                      <br />
                      <br />
                      BTTS is Both teams to score Treble bet.
                    </p>
                  ) : null} */}
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    width: "100%",
                    height: "100vh",
                  }}
                >
                  <div className={crystalStyles.ldsspinner}>
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
              )}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <Footer />
    </>
  );
};

export default CrystalBall;
