"use client";
import { useState, useEffect } from "react";
// import bubbleStyles from "./PredictionsBubble.module.css";
import bubbleStyles from "./BubbleStyles.module.css";
import { getCountryCode } from "../../utils/getCountryCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFutbolBall,
  faTrophy,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const PredictionsBubble = (props) => {
  const [zone, setZone] = useState("");
  const [classicData, setClassicData] = useState();
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setZone(timeZone);
    // console.log("zone", zone);
  }, [zone]);
  useEffect(() => {
    setClassicData(props.data);
  }, [props.data]);
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        width: "100%",
        maxWidth: "500px",
        minHeight: "70vh",
      }}
    >
      {classicData && classicData.length > 0 ? (
        classicData.map((element, index) => (
          <div className={bubbleStyles.ticket} key={index}>
            <div className={bubbleStyles.dateMain}>
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
                  className={bubbleStyles.date}
                  style={{ fontSize: "1.1em" }}
                >
                  {element.competition_cluster} - {element.competition_name}{" "}
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div
                className={bubbleStyles.date}
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

            <div
              className={bubbleStyles.rightData}
              style={{
                padding: "10px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  width: "84%",
                }}
              >
                <p className={bubbleStyles.federation} style={{ margin: "0" }}>
                  {element.home_team}
                </p>
                <p
                  className={bubbleStyles.federation}
                  style={{ fontSize: "0.6rem", margin: "0" }}
                >
                  vs
                </p>
                <p className={bubbleStyles.federation} style={{ margin: "0" }}>
                  {element.away_team}
                </p>
              </div>
              <div className={bubbleStyles.leftData}>
                <div className={bubbleStyles.odds}>
                  {element.market.toUpperCase()}
                  <div
                    className={bubbleStyles.odds}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <b style={{ fontSize: "1.2em" }}>
                      {element.prediction.toUpperCase()}
                    </b>
                  </div>
                </div>
                {/* <div className={bubbleStyles.odds}>
                  {element.odds[element.prediction]}
                </div> */}
              </div>
            </div>
            <Link
              href={`/predictions/${element.id}`}
              style={{
                textDecoration: "none",
                padding: "5px 10px",
                backgroundColor: "#50505070",
                color: "#ffffff",
                borderRadius: "15px",
                cursor: "pointer",
                boxShadow: "2px 1px 5px #9f9f9f",
                fontSize: "0.8em",
              }}
            >
              Details
            </Link>
          </div>
        ))
      ) : (
        <div className={bubbleStyles.ldsspinner}>
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
      )}
      {/* <div
        style={{
          marginBottom: "15px",
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {" "}
        <p style={{ fontSize: "0.7rem" }}>MatchPredictor.net</p>
        <p style={{ fontSize: "0.6rem" }}>
          *responsible betting. not financial advice
        </p>
      </div> */}
    </div>
  );
};

export default PredictionsBubble;
