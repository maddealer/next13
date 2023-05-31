"use client";
// export default function Details({ params }) {
//   console.log(params);
//   return <div>ID: {params.details}</div>;
// }
import React, { useState, useEffect } from "react";
import { checkWinner } from "../../../utils/checkWinner";
import { checkHomeD } from "../../../utils/homeD";
import { colorSquare } from "../../../utils/colorSquare";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFutbolBall,
  faTrophy,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import predictionsClasses from "../Predictions.module.css";
import detailsClasses from "./Details.module.css";
import bubbleStyles from "../../components/PredictionsBubble.module.css";
import Menu from "../../components/Menu";
import { getCountryCode } from "../../../utils/getCountryCode";
export default function Details({ params }) {
  const routeParams = params.details;
  const [data, setData] = useState();
  const [head, setHead] = useState();
  const [homeD, setHomeD] = useState();
  const [awayD, setAwayD] = useState();
  const [loadHead, setLoadHead] = useState(true);
  const [loadHomeD, setLoadHomeD] = useState(true);
  const [loadAwayD, setLoadAwayD] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [zone, setZone] = useState("");

  const markets = {
    home_over_05: "Home Over 0.5",
    btts: "Both Teams To Score",
    over_35: "Over 3.5",
    classic: "Classic",
    home_over_15: "Home Over 1.5",
    over_25: "Over 2.5",
    away_over_15: "Away Over 1.5",
    away_over_05: "Away Over 0.5",
  };
  useEffect(() => {
    const getDetails = async (id) => {
      const optionsDetails = {
        method: "GET",
        url: `https://football-prediction-api.p.rapidapi.com/api/v2/predictions/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
          "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(optionsDetails);
        setData(response.data.data[0]);
        // console.log(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails(routeParams);
  }, [routeParams]);
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setZone(timeZone);
    // console.log("zone", zone);
  }, [zone]);
  const getStats = async (id) => {
    setShowStats(true);

    const optionsHtoH = {
      method: "GET",
      url: `https://football-prediction-api.p.rapidapi.com/api/v2/head-to-head/${id}`,
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
        "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
      },
    };
    const optionsHomeD = {
      method: "GET",
      url: `https://football-prediction-api.p.rapidapi.com/api/v2/home-last-10/${id}`,
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
        "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
      },
    };
    const optionsAwayD = {
      method: "GET",
      url: `https://football-prediction-api.p.rapidapi.com/api/v2/away-last-10/${id}`,
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "752fab4499msh375549feb0a160ep1567e1jsn47becd0a461f",
        "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
      },
    };

    try {
      const response1 = await axios.request(optionsHtoH);
      setLoadHead(false);
      setHead(response1.data.data.encounters);

      // console.log(response1.data.data.encounters);
    } catch (error) {
      console.log(error);
    }
    try {
      const response2 = await axios.request(optionsHomeD);
      setLoadHomeD(false);
      setHomeD(response2.data.data.encounters);

      // console.log(response2.data.data.encounters);
    } catch (error) {
      console.log(error);
    }
    try {
      const response3 = await axios.request(optionsAwayD);
      setLoadAwayD(false);
      setAwayD(response3.data.data.encounters);

      // console.log(response3.data.data.encounters);
    } catch (error) {
      console.log(error);
    }
  };

  const convertTZ = (date, zone) => {
    const options = {
      month: "short",
      day: "numeric",
      weekday: "short",
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

  const date = (str) => {
    const options = {
      day: "numeric",
      year: "numeric",
      month: "short",
    };
    const date = new Date(str);
    // console.log(date.toLocaleDateString("en-US"));
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
          fontSize: "0.7em",
        }}
      >
        {date.toLocaleDateString("en-US", options)}
      </div>
    );
  };

  return (
    <div>
      <Menu />
      <div
        className={bubbleStyles.detailsFont}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "90vh",
            alignItems: "center",
            marginTop: "30px",
            width: "95%",
          }}
        >
          {data !== undefined ? (
            <>
              <div
                className={bubbleStyles.ticket}
                style={{ width: "94%", maxWidth: "500px" }}
              >
                <div
                  className={bubbleStyles.dateMain}
                  style={{ flexDirection: "row" }}
                >
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    {data.competition_cluster === "Champions League" ? (
                      <FontAwesomeIcon icon={faFutbol} size="2x" />
                    ) : data.competition_cluster === "Europa League" ? (
                      <FontAwesomeIcon icon={faTrophy} size="2x" />
                    ) : (
                      <div
                        style={{ width: "45px", height: "25px" }}
                        className={`fi fi-${getCountryCode(
                          data.competition_cluster
                        )}`}
                      ></div>
                    )}
                    &nbsp;&nbsp;&nbsp;
                    <div
                      className={bubbleStyles.date}
                      style={{ fontSize: "1.2em" }}
                    >
                      {data.competition_cluster}
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div
                    className={bubbleStyles.date}
                    style={{
                      fontSize: "1.2em",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    {`${
                      zone !== ""
                        ? convertTZ(data.start_date + "+0000", zone)
                        : null
                    }`}{" "}
                  </div>
                </div>
                <div
                  className={bubbleStyles.dateMain}
                  style={{ flexDirection: "column", color: "#505050" }}
                >
                  <p style={{ fontSize: "1.5em", marginBottom: "20px" }}>
                    {data.competition_name}
                  </p>

                  <p
                    style={{
                      fontSize: "2em",
                      fontWeight: "bold",
                      color: "#505050",
                    }}
                  >
                    {data.home_team}
                  </p>
                  <p>vs</p>
                  <p
                    style={{
                      fontSize: "2em",
                      fontWeight: "bold",
                      color: "#505050",
                    }}
                  >
                    {data.away_team}
                  </p>

                  <p
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      color: "#505050",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    Available Predictions
                  </p>

                  {data.available_markets.map((el, index) => {
                    return (
                      <>
                        <div
                          key={index + 123456}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "10px",
                            marginBottom: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "1.4em",
                              minWidth: "60%",
                            }}
                          >
                            {markets[el]}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "left",
                              fontSize: "1.4em",
                              minWidth: "23%",
                            }}
                          >
                            <b
                              style={{
                                fontWeight: "800",
                              }}
                            >
                              {data.prediction_per_market[
                                el
                              ].prediction.toUpperCase()}
                            </b>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "right",
                              alignItems: "center",
                              textAlign: "center",
                              fontSize: "1.4em",
                            }}
                          >
                            {" "}
                            {data.prediction_per_market[el].odds[
                              data.prediction_per_market[el].prediction
                            ]
                              ? data.prediction_per_market[el].odds[
                                  data.prediction_per_market[el].prediction
                                ]
                              : "*"}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <br />
              {/* //FROM HERE STATS */}
              {!showStats ? (
                <button
                  className={detailsClasses.button5}
                  onClick={() => getStats(routeParams)}
                >
                  Load More Stats
                </button>
              ) : null}
              {showStats ? (
                <>
                  <div
                    className={bubbleStyles.ticket}
                    style={{ width: "94%", maxWidth: "500px" }}
                  >
                    <br />
                    <p
                      style={{
                        fontSize: "0.8em",
                        fontWeight: "bold",
                        color: "#505050",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      Head to Head Matches Last 10
                    </p>
                    <br />
                    {head !== undefined ? (
                      head.map((element, index) => {
                        return (
                          <>
                            <div
                              key={`${index + element.start_date}`}
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                fontSize: "0.8rem",
                                margin: "5px 10px",
                                width: "100%",
                              }}
                            >
                              {date(element.start_date)}
                              <div
                                style={{
                                  width: "90%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginLeft: "10px",
                                }}
                              >
                                {" "}
                                {checkWinner(
                                  element.home_team,
                                  element.away_team,
                                  element.fulltime_result
                                )}
                              </div>
                            </div>
                            <hr />
                          </>
                        );
                      })
                    ) : !loadHead ? (
                      <p>No Data</p>
                    ) : (
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
                    )}
                    {/* homeData */}
                    <br />
                    <p
                      style={{
                        fontSize: "0.8em",
                        fontWeight: "bold",
                        color: "#505050",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      Last Matches:&nbsp;{data.home_team}
                    </p>
                    <br />
                    {homeD !== undefined ? (
                      homeD.map((element, index) => {
                        return (
                          <>
                            <div
                              key={`${index + element.start_date + 123456}`}
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                fontSize: "0.8rem",
                                margin: "5px 10px",
                                width: "100%",
                              }}
                            >
                              {date(element.start_date)}
                              <div
                                style={{
                                  width: "90%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginLeft: "10px",
                                }}
                              >
                                {" "}
                                {checkHomeD(
                                  data.home_team,
                                  element.played_against,
                                  element.result,
                                  element.fulltime_result,
                                  element.played_away
                                )}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginLeft: "5px",
                                }}
                              >
                                {colorSquare(element.result)}
                              </div>
                            </div>
                            <hr />
                          </>
                        );
                      })
                    ) : !loadHomeD ? (
                      <p>No Data</p>
                    ) : (
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
                    )}
                    {/* awayData */}
                    <br />
                    <p
                      style={{
                        fontSize: "0.8em",
                        fontWeight: "bold",
                        color: "#505050",
                        marginTop: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      Last Matches:&nbsp;{data.away_team}
                    </p>
                    <br />
                    {awayD !== undefined ? (
                      awayD.map((element, index) => {
                        return (
                          <>
                            <div
                              key={`${index + element.start_date + 1234567}`}
                              style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                fontSize: "0.8rem",
                                margin: "5px 10px",
                                width: "100%",
                              }}
                            >
                              {date(element.start_date)}
                              <div
                                style={{
                                  width: "90%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginLeft: "10px",
                                }}
                              >
                                {" "}
                                {checkHomeD(
                                  data.away_team,
                                  element.played_against,
                                  element.result,
                                  element.fulltime_result,
                                  element.played_away
                                )}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginLeft: "5px",
                                }}
                              >
                                {colorSquare(element.result)}
                              </div>
                            </div>
                            <hr />
                          </>
                        );
                      })
                    ) : !loadAwayD ? (
                      <p>No Data</p>
                    ) : (
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
                    )}
                  </div>
                </>
              ) : null}

              <br />
              <p style={{ fontSize: "0.7rem" }}>
                MatchPredictor.net supports responsible betting 18+
              </p>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
