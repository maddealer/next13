import "./global.css";
import mainStyles from "./page.module.css";
import Link from "next/link";
import BallMain from "./components/BallMain";
// import CookieConsent from "react-cookie-consent";
import Image from "next/image";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CookieConsent from "./components/Cookies";
// import Menu from "../Menu";
import localFont from "next/font/local";
import MainButtons from "./components/MainButtons";
const dayseOne = localFont({ src: "../fonts/DaysOne-Regular.ttf" });
const linksTo = localFont({ src: "../fonts/Inter-VariableFont_slnt,wght.ttf" });
const Main = () => {
  return (
    <>
      <div className={mainStyles.main}>
        <div className={mainStyles.box}>
          <div style={{ height: "100vh", width: "100%", maxWidth: "860px" }}>
            <Menu />

            <MainButtons />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#4f8230",
                  fontSize: "2rem",
                  marginBottom: "0",
                }}
              >
                <span style={dayseOne.style}>Free and Simple</span>{" "}
              </p>
              <p style={{ color: "#4f8230", fontSize: "2rem", marginTop: "0" }}>
                <span span style={dayseOne.style}>
                  Prediction Tool
                </span>
              </p>{" "}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <BallMain />
            </div>
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
                  color: "#b8b8b8",
                }}
              >
                DISCLAIMER
              </p>
              <p
                style={{
                  marginTop: "0",
                }}
              >
                Based on AI, Poisson probabilities and mathematical calculations{" "}
              </p>
            </div>
            {/* <div className={mainStyles.text}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "10px 10px",
                  marginBottom: "50px",
                }}
              >
                <h1
                  className={mainStyles.maintitle}
                  style={{ fontWeight: "normal" }}
                >
                  <span style={dayseOne.style}> Match Predictor</span>
                </h1>
                <p className={mainStyles.mainp} style={{ marginTop: "20px" }}>
                  Is a Free & Simple Football Predictions App
                </p>
                <p className={mainStyles.mainp}>
                  Based on AI, Poisson probabilities and mathematical
                  calculations.
                </p>
              </div>
              <div className={mainStyles.cardContainer}>
                <Link href="predictions" className={mainStyles.link}>
                  <div
                    className={mainStyles.card}
                    style={{ position: "relative", zIndex: "5" }}
                  >
                    Predictions
                  </div>
                </Link>

                <Link href="crystal-ball" className={mainStyles.link}>
                  <div
                    className={mainStyles.card}
                    style={{ position: "relative", zIndex: "5" }}
                  >
                    Crystal Ball
                  </div>
                </Link>
              </div>
              <div
                className={mainStyles.cardContainer}
                style={{ marginBottom: "30px" }}
              >
                <Link href="btts" className={mainStyles.link}>
                  <div
                    className={mainStyles.card}
                    style={{ position: "relative", zIndex: "5" }}
                  >
                    BTTS
                  </div>
                </Link>

                <Link href="over25" className={mainStyles.link}>
                  <div
                    className={mainStyles.card}
                    style={{ position: "relative", zIndex: "5" }}
                  >
                    U/O 2.5
                  </div>
                </Link>
              </div>
            </div> */}
          </div>

          {/* <Image
            className={mainStyles.b}
            src="/football.png"
            width={50}
            height={50}
            alt="ball"
          />
          <Image
            className={mainStyles.b1}
            src="/football.png"
            width={50}
            height={50}
            alt="ball"
          />
          <Image
            className={mainStyles.b2}
            src="/football.png"
            width={50}
            height={50}
            alt="ball"
          />
          <Image
            className={mainStyles.b3}
            src="/football.png"
            width={50}
            height={50}
            alt="ball"
          /> */}

          {/* <div className={mainStyles.circle}></div> */}
        </div>

        {/* <CookieConsent
          style={{
            background: "rgba(60, 60, 60, 0.9)",
            textShadow: "2px 2px black",
            fontSize: "0.8em",
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent> */}
        <CookieConsent />
      </div>
      <Footer />
    </>
  );
};

export default Main;
