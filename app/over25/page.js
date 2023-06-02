"use client";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import over25Styles from "./Over25.module.css";
import BttsBubble from "../components/BttsBubble";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Btts = () => {
  const [btts, setBtts] = useState();

  useEffect(() => {
    const getBtts = async (id) => {
      const options = {
        method: "GET",
        url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
        params: { market: "over_25" },
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
      <div className={over25Styles.bg}>
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
          <h5 className={over25Styles.header} style={{ marginBottom: "0" }}>
            Under/Over 2.5
          </h5>
        </div>
        <BttsBubble data={btts} type="U/O 2.5" />
      </div>
    </>
  );
};

export default Btts;
