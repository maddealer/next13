"use client";
import { useState, useEffect } from "react";
import bubbleStyles from "./DisplayBubbles.module.css";
import { getCountryCode } from "../../utils/getCountryCode";
import Link from "next/link";
import { sortedBubbleColor } from "../../utils/federationBtnColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFutbolBall,
  faTrophy,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
const DisplayBubbles = (props) => {
  const [zone, setZone] = useState("");
  const [bttsData, setBttsData] = useState();
  const [typeSort, setTypeSort] = useState("country");
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setZone(timeZone);
    // console.log("zone", zone);
  }, [zone]);
  useEffect(() => {
    setBttsData(props.data);
  }, [props.data]);
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
  const sortStart = () => {
    setTypeSort("start");
    let sorted = [...props.data].sort(function (a, b) {
      if (a.start_date < b.start_date) {
        return -1;
      }
      if (a.start_date > b.start_date) {
        return 1;
      }
      return 0;
    });
    setBttsData(sorted);
  };
  const sortCountry = () => {
    setTypeSort("country");

    let sorted = [...props.data].sort(function (a, b) {
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
    setBttsData(sorted);
  };
  const yes = () => {
    setTypeSort("yes");

    let filtered = props.data.filter((a) => a.prediction === "yes");
    setBttsData(filtered);
  };
  const no = () => {
    setTypeSort("no");

    let filtered = props.data.filter((a) => a.prediction === "no");
    setBttsData(filtered);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5px",
          width: "100%",
          maxWidth: "500px",
          minHeight: "90vh",
        }}
      >
        {bttsData && bttsData.length > 0 ? (
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <p style={{ fontSize: "0.8em", marginRight: "10px" }}>Sort By</p> */}

            <button
              className={bubbleStyles.button4}
              onClick={() => sortCountry()}
              style={{
                backgroundColor: `${sortedBubbleColor(typeSort, "country")}`,
                border: "none",
                color: `${typeSort === "country" ? "#ffffff" : "#000000"}`,
              }}
            >
              COUNTRY
            </button>
            <button
              className={bubbleStyles.button4}
              onClick={() => sortStart()}
              style={{
                backgroundColor: `${sortedBubbleColor(typeSort, "start")}`,
                border: "none",
                color: `${typeSort === "start" ? "#ffffff" : "#000000"}`,
              }}
            >
              START TIME
            </button>

            <button
              className={bubbleStyles.button4}
              onClick={() => yes()}
              style={{
                backgroundColor: `${sortedBubbleColor(typeSort, "yes")}`,
                border: "none",

                color: `${typeSort === "yes" ? "#ffffff" : "#000000"}`,
              }}
            >
              {props.type === "U/O 2.5" ? "OVER" : "YES"}
            </button>
            <button
              className={bubbleStyles.button4}
              onClick={() => no()}
              style={{
                backgroundColor: `${sortedBubbleColor(typeSort, "no")}`,
                border: "none",

                color: `${typeSort === "no" ? "#ffffff" : "#000000"}`,
              }}
            >
              {props.type === "U/O 2.5" ? "UNDER" : "NO"}
            </button>
          </div>
        ) : null}

        {bttsData && bttsData.length > 0 ? (
          bttsData.map((element, index) => (
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

              <div className={bubbleStyles.rightData}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "84%",
                  }}
                >
                  <p
                    className={bubbleStyles.federation}
                    style={{ margin: "0" }}
                  >
                    {element.home_team}
                  </p>
                  <p
                    className={bubbleStyles.federation}
                    style={{ fontSize: "0.6rem", margin: "0" }}
                  >
                    vs
                  </p>
                  <p
                    className={bubbleStyles.federation}
                    style={{ margin: "0" }}
                  >
                    {element.away_team}
                  </p>
                </div>
                <div className={bubbleStyles.leftData}>
                  <div className={bubbleStyles.odds}>
                    {" "}
                    {props.type === "U/O 2.5"
                      ? "U/O 2.5"
                      : element.market.toUpperCase()}{" "}
                    <div className={bubbleStyles.odds}>
                      <b>
                        {props.type === "U/O 2.5"
                          ? element.prediction === "yes"
                            ? "OVER"
                            : "UNDER"
                          : element.prediction.toUpperCase()}
                      </b>
                    </div>
                  </div>
                  <div className={bubbleStyles.odds}>
                    {" "}
                    {element.odds[element.prediction]}
                  </div>
                </div>
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
        {/* <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        {" "}
        <p style={{ fontSize: "0.7rem" }}>MatchPredictor.net</p>
        <p style={{ fontSize: "0.6rem" }}>
          *responsible betting. not financial advice
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default DisplayBubbles;
