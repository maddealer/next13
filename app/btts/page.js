"use client";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import bttsStyles from "./Btts.module.css";
import BttsBubble from "../components/BttsBubble";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from "../components/Footer";
import "../global.css";
import Link from "next/link";
import localFont from "next/font/local";
// const dayseOne = localFont({ src: "../fonts/DaysOne-Regular.ttf" });
const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });

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
      <div className={bttsStyles.main}>
        <div className={bttsStyles.box}>
          <div style={{ width: "100%", maxWidth: "860px" }}>
            <Menu />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 15px",
                paddingBottom: "5px",
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
                  <span style={interFont.style}>BTTS</span>
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
                  <span style={interFont.style}>Predictions</span>
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
                  <span style={interFont.style}>U/O 2.5</span>
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <h5
                className={bttsStyles.header}
                style={{ marginBottom: "0", color: "#4f8230" }}
              >
                <span span style={dayseOne.style}>
                  Both Teams To Score
                </span>
              </h5>
            </div>
            <BttsBubble data={btts} type="Btts" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Btts;
