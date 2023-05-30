"use client";
import { useState, useEffect } from "react";
import bubbleStyles from "./PredictionsBubble.module.css";
import { getCountryCode } from "../../utils/getCountryCode";
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
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        width: "100%",
        maxWidth: "500px",
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
                  alignItems: "center",
                }}
              >
                {element.competition_cluster === "Champions League" ? (
                  //   <FontAwesomeIcon icon={faFutbol} size="2x" />
                  <span></span>
                ) : element.competition_cluster === "Europa League" ? (
                  //   <FontAwesomeIcon icon={faTrophy} size="2x" />
                  <span></span>
                ) : (
                  <div
                    style={{ width: "45px", height: "25px" }}
                    className={`fi fi-${getCountryCode(
                      element.competition_cluster
                    )}`}
                  ></div>
                )}
                &nbsp;&nbsp;&nbsp;
                <div
                  className={bubbleStyles.date}
                  style={{ fontSize: "1.2em" }}
                >
                  {element.competition_cluster}
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
                    ? convertTZ(element.start_date + "+0000", zone)
                    : null
                }`}{" "}
              </div>
            </div>
            <div
              className={bubbleStyles.rightData}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              {" "}
              {element.competition_name}
            </div>

            <div
              className={bubbleStyles.rightData}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p className={bubbleStyles.teams}>{element.home_team}</p>
                <p
                  className={bubbleStyles.teams}
                  style={{ fontSize: "0.6rem" }}
                >
                  vs
                </p>
                <p className={bubbleStyles.teams}>{element.away_team}</p>
              </div>
            </div>
            <div className={bubbleStyles.rightData}>
              {" "}
              <div className={bubbleStyles.leftData}>
                <div
                  className={bubbleStyles.odds}
                  style={{
                    fontSize: "2em",
                    textShadow: "2px 2px 5px #767676",
                    color: "#505050",
                  }}
                >
                  <b>{element.prediction}</b>
                </div>
                <div className={bubbleStyles.odds}>
                  avg. odds {element.odds[element.prediction]}
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                marginTop: "15px",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Link
                //    className={predictionsClasses.cardbtn}
                // to={`/details/${element.id}`}
                href="/"
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
                DETAILS
              </Link>
            </div>
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
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        {" "}
        <p style={{ fontSize: "0.7rem" }}>MatchPredictor.net</p>
        <p style={{ fontSize: "0.6rem" }}>
          *responsible betting. not financial advice
        </p>
      </div>
    </div>
  );
};

export default PredictionsBubble;
