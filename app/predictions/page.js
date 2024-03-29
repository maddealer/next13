"use client";
import mainStyles from "../page.module.css";
import { data } from "../../redux/predictionsSlice";
import axios from "axios";
import { allData } from "../../redux/predictionsSlice";
import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import { getCountryCode } from "../utils/getCountryCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../global.css";
import crystalStyles from "../crystal-ball/CrystalBall.module.css";
import localFont from "next/font/local";
// const dayseOne = localFont({ src: "../fonts/DaysOne-Regular.ttf" });
const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
import {
  faArrowUp,
  faFutbolBall,
  faTrophy,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import {
  federationBtnColor,
  leagueBtnColor,
} from "../../utils/federationBtnColor";
// import button from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getFederation,
  getLeague,
  setFederation,
  setLeague,
} from "../../redux/leagueSlice";
import predictionsClasses from "./Predictions.module.css";
import PredictionsBubble from "../components/PredictionsBubble";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Link from "next/link";
import MainButtons from "../components/MainButtons";

function Predictions() {
  const dispatch = useDispatch();
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
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
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
  const [zone, setZone] = useState("");
  const [dataReady, setDataReady] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [loading1, setLoading1] = useState(true);

  const federation = useSelector(getFederation);
  const league = useSelector(getLeague);

  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setZone(timeZone);
    // console.log("zone", zone);
  }, [zone]);
  useEffect(() => {
    const handleScrollBtn = () => {
      window.pageYOffset > 200 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollBtn);
    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);

  useEffect(() => {
    //console.log("DATA", data);
    if (league === "") {
      if (dataLoadet !== null) dataHandler();
    }
  }, [dataLoadet, federation, league]);
  useEffect(() => {
    if (league !== "") {
      leagueSelect();
    }
  }, [league]);
  useEffect(() => {
    const handleScrollBtn = () => {
      window.pageYOffset > 200 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollBtn);
    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);
  const convertTZ = (date, zone) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (
      new Date(date).toLocaleDateString("en-US", options) +
      " " +
      new Date(date).toLocaleTimeString("en-GB")
    );
  };

  const dataHandler = () => {
    setLoading1(true);
    let dataNew = dataLoadet
      .filter((a) => a.federation === federation)
      .sort(function (a, b) {
        if (a.competition_cluster < b.competition_cluster) {
          return -1;
        }
        if (a.competition_cluster > b.competition_cluster) {
          return 1;
        }
        if (a.start_date < b.start_date) {
          return -1;
        }
        if (a.start_date > b.start_date) {
          return 1;
        }
        return 0;
      });
    setDataReady(dataNew);

    setLoading1(false);
  };
  const leagueSelect = () => {
    let dataNew = dataLoadet
      .filter((a) => a.federation === federation)
      .sort(function (a, b) {
        if (a.competition_cluster < b.competition_cluster) {
          return -1;
        }
        if (a.competition_cluster > b.competition_cluster) {
          return 1;
        }
        if (a.start_date < b.start_date) {
          return -1;
        }
        if (a.start_date > b.start_date) {
          return 1;
        }
        return 0;
      });
    if (federation === "UEFA" && league === "Premier League") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Premier League")
        .filter((a) => a.competition_cluster === "England");
    }
    if (league === "Serie A") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Serie A")
        .filter((a) => a.competition_cluster === "Italy");
    }
    if (league === "Primera Division") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Primera Division")
        .filter((a) => a.competition_cluster === "Spain");
    }
    if (league === "Ligue 1") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Ligue 1")
        .filter((a) => a.competition_cluster === "France");
    }
    if (league === "Bundesliga") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Bundesliga")
        .filter((a) => a.competition_cluster === "Germany");
    }
    if (league === "Champions League") {
      dataNew = dataNew.filter(
        (a) => a.competition_cluster === "Champions League"
      );
    }
    if (league === "Europa League") {
      dataNew = dataNew.filter(
        (a) => a.competition_cluster === "Europa League"
      );
    }
    //CONCACAF
    if (league === "Major League Soccer") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Major League Soccer")
        .filter((a) => a.competition_cluster === "USA");
    }
    if (league === "Liga MX") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Liga MX")
        .filter((a) => a.competition_cluster === "Mexico");
    }
    if (league === "Premier League" && federation === "CONCACAF") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Premier League")
        .filter((a) => a.competition_cluster === "Canada");
    }
    //CONMEBOL
    if (league === "Liga Profesional") {
      dataNew = dataNew
        .filter((a) => a.competition_name === "Liga Profesional")
        .filter((a) => a.competition_cluster === "Argentina");
    }

    setDataReady(dataNew);
    setLoading1(false);
  };
  return (
    <>
      <div className={crystalStyles.main}>
        <div className={crystalStyles.box}>
          <div style={{ width: "100%", maxWidth: "860px" }}>
            <Menu />

            <MainButtons />

            {/* UEFA BUTTONS LEAGUES */}
            {!loading ? (
              <>
                {" "}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      width: "100%",
                      maxWidth: "500px",
                    }}
                  >
                    <button
                      className={predictionsClasses.button4}
                      onClick={() => {
                        // setFederation("CONCACAF");
                        dispatch(setFederation("CONCACAF"));
                        dispatch(setLeague(""));

                        // setLeague("");
                      }}
                      style={{
                        backgroundColor: `${federationBtnColor(
                          federation,
                          "CONCACAF"
                        )}`,
                        width: "46%",
                        color: `${
                          federation === "CONCACAF" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>CONCACAF</span>
                    </button>
                    <button
                      className={predictionsClasses.button4}
                      onClick={() => {
                        // setFederation("CONMEBOL");
                        dispatch(setFederation("CONMEBOL"));
                        dispatch(setLeague(""));

                        // setLeague("");
                      }}
                      style={{
                        backgroundColor: `${federationBtnColor(
                          federation,
                          "CONMEBOL"
                        )}`,
                        width: "45%",
                        color: `${
                          federation === "CONMEBOL" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>CONMEBOL</span>
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "5px",
                      marginTop: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                      width: "100%",
                      maxWidth: "500px",
                    }}
                  >
                    <button
                      className={predictionsClasses.button4}
                      onClick={() => {
                        // setFederation("AFC");
                        dispatch(setFederation("AFC"));
                        dispatch(setLeague(""));

                        // setLeague("");
                      }}
                      style={{
                        backgroundColor: `${federationBtnColor(
                          federation,
                          "AFC"
                        )}`,
                        width: "30%",
                        color: `${
                          federation === "AFC" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>AFC</span>
                    </button>
                    <button
                      className={predictionsClasses.button4}
                      onClick={() => {
                        // setFederation("UEFA");
                        dispatch(setFederation("UEFA"));
                        dispatch(setLeague(""));
                        // setLeague("");
                      }}
                      style={{
                        backgroundColor: `${federationBtnColor(
                          federation,
                          "UEFA"
                        )}`,
                        width: "30%",
                        color: `${
                          federation === "UEFA" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>UEFA</span>
                    </button>
                    <button
                      className={predictionsClasses.button4}
                      onClick={() => {
                        // setFederation("CAF");
                        dispatch(setFederation("CAF"));
                        dispatch(setLeague(""));

                        // setLeague("");
                      }}
                      style={{
                        backgroundColor: `${federationBtnColor(
                          federation,
                          "CAF"
                        )}`,
                        width: "30%",
                        color: `${
                          federation === "CAF" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>CAF</span>
                    </button>
                  </div>
                </div>
                <hr
                  style={{
                    display: "block",
                    width: "90%",
                    maxWidth: "350px",
                    border: "0",
                    height: "1px",
                    borderTop: "1px solid #ff7a00",
                  }}
                />
                {federation === "UEFA" &&
                Object.keys(dataLoadet).length !== 0 ? (
                  <div
                    style={{
                      marginBottom: "0px",
                      marginTop: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "0px",
                        marginTop: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: "500px",
                      }}
                    >
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Premier League"));

                          // setLeague("Premier League");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Premier League"
                          )}`,
                          color: `${
                            league === "Premier League" ? "#ffffff" : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Premier League</span>
                      </button>
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Serie A"));

                          // setLeague("Serie A");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Serie A"
                          )}`,
                          color: `${
                            league === "Serie A" ? "#ffffff" : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Serie A</span>
                      </button>
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Primera Division"));

                          // setLeague("Primera Division");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Primera Division"
                          )}`,
                          color: `${
                            league === "Primera Division"
                              ? "#ffffff"
                              : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Primera Division</span>
                      </button>
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Ligue 1"));

                          // setLeague("Ligue 1");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Ligue 1"
                          )}`,
                          color: `${
                            league === "Ligue 1" ? "#ffffff" : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Ligue 1</span>
                      </button>
                    </div>
                    <div
                      style={{
                        marginBottom: "0px",
                        marginTop: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "100%",
                        maxWidth: "500px",
                      }}
                    >
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Bundesliga"));

                          // setLeague("Bundesliga");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Bundesliga"
                          )}`,
                          color: `${
                            league === "Bundesliga" ? "#ffffff" : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Bundesliga</span>
                      </button>
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Champions League"));

                          // setLeague("Champions League");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Champions League"
                          )}`,
                          color: `${
                            league === "Champions League"
                              ? "#ffffff"
                              : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Champions League</span>
                      </button>
                      <button
                        className={predictionsClasses.button5}
                        onClick={() => {
                          dispatch(setLeague("Europa League"));

                          // setLeague("Europa League");
                        }}
                        style={{
                          color: "#3c3c3c",

                          backgroundColor: `${leagueBtnColor(
                            league,
                            "Europa League"
                          )}`,
                          color: `${
                            league === "Europa League" ? "#ffffff" : "#000000"
                          }`,
                        }}
                      >
                        <span style={interFont.style}>Europa League</span>
                      </button>
                    </div>
                  </div>
                ) : null}
                {/* CONCACAF BUTTONS LEAGUES */}
                {federation === "CONCACAF" &&
                Object.keys(dataLoadet).length !== 0 ? (
                  <div
                    style={{
                      marginBottom: "10px",
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className={predictionsClasses.button5}
                      onClick={() => {
                        dispatch(setLeague("Major League Soccer"));

                        // setLeague("Premier League");
                      }}
                      style={{
                        color: "#3c3c3c",

                        backgroundColor: `${leagueBtnColor(
                          league,
                          "Major League Soccer"
                        )}`,
                        color: `${
                          league === "Major League Soccer"
                            ? "#ffffff"
                            : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>MLS</span>
                    </button>
                    <button
                      className={predictionsClasses.button5}
                      onClick={() => {
                        dispatch(setLeague("Liga MX"));

                        // setLeague("Serie A");
                      }}
                      style={{
                        color: "#3c3c3c",

                        backgroundColor: `${leagueBtnColor(league, "Liga MX")}`,
                        color: `${
                          league === "Liga MX" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>Liga MX</span>
                    </button>
                    <button
                      className={predictionsClasses.button5}
                      onClick={() => {
                        dispatch(setLeague("Premier League"));

                        // setLeague("Serie A");
                      }}
                      style={{
                        color: "#3c3c3c",

                        backgroundColor: `${leagueBtnColor(
                          league,
                          "Premier League"
                        )}`,
                        color: `${
                          league === "Premier League" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>Canada Premier League</span>
                    </button>
                  </div>
                ) : null}
                {/* CONMEBOL BUTTONS LEAGUES */}
                {federation === "CONMEBOL" &&
                Object.keys(dataLoadet).length !== 0 ? (
                  <div
                    style={{
                      marginBottom: "10px",
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className={predictionsClasses.button5}
                      onClick={() => {
                        dispatch(setLeague("Liga Profesional"));

                        // setLeague("Premier League");
                      }}
                      style={{
                        color: "#3c3c3c",

                        backgroundColor: `${leagueBtnColor(
                          league,
                          "Liga Profesional"
                        )}`,
                        color: `${
                          league === "Liga Profesional" ? "#ffffff" : "#000000"
                        }`,
                      }}
                    >
                      <span style={interFont.style}>Liga Profesional</span>
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}

            <div className={predictionsClasses.wrapper}>
              {" "}
              {loading ? (
                <>
                  <div className={predictionsClasses.ldsspinner}>
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
                </>
              ) : dataReady ? (
                dataReady.length > 0 ? (
                  <PredictionsBubble data={dataReady} />
                ) : loading1 ? (
                  <>
                    <div className={predictionsClasses.ldsspinner}>
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
                  </>
                ) : (
                  <div
                    style={{
                      padding: "0 10px",
                      marginTop: "15px",
                      minHeight: "70vh",
                    }}
                  >
                    {" "}
                    Sorry, there is no predictions for this Federation at the
                    moment.
                  </div>
                )
              ) : (
                rejected
              )}
            </div>
            {showButton ? (
              <button
                className={predictionsClasses.up}
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "0",
                  marginTop: "15px",
                  width: "40px",
                  height: "60px",
                  zIndex: "1",
                }}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
              >
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Predictions;
