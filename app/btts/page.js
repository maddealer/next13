"use client";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import bttsStyles from "./Btts.module.css";
import DisplayBubbles from "../components/DisplayBubbles";
const Btts = () => {
  const [btts, setBtts] = useState();

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
        let data = response.data.data;
        data = data.sort(function (a, b) {
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
        setBtts(data);
        // console.log(withOdds);
      } catch (error) {
        console.log(error);
      }
    };
    getBtts();
  }, []);
  return (
    <>
      <div className={bttsStyles.bg}>
        <Menu />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h5 className={bttsStyles.header} style={{ marginBottom: "0" }}>
            Both Teams To Score
          </h5>
        </div>
        <DisplayBubbles data={btts} type="Btts" />
      </div>
    </>
  );
};

export default Btts;
