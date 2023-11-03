import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import "../global.css";
import Image from "next/image";

import aboutStyles from "../about/About.module.css";
import Footer from "../components/Footer";
import localFont from "next/font/local";

const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });
const Contacts = () => {
  return (
    <>
      {" "}
      <div className={aboutStyles.main}>
        <div className={aboutStyles.box}>
          <div style={{ width: "100%", maxWidth: "860px" }}>
            <Menu />
            <div style={{ minHeight: "100vh" }}>
              <div className={aboutStyles.container}>
                <h5
                  className={aboutStyles.header}
                  style={{
                    marginBottom: "0",
                    color: "#4f8230",
                    fontWeight: "100",
                    textShadow: "none",
                  }}
                >
                  <span style={dayseOne.style}>Contacts</span>
                </h5>
                <article
                  style={{
                    textDecoration: "none",
                    color: "#5c0e5a",
                    marginTop: "100px",
                    width: "100%",
                  }}
                >
                  {/* <p style={{ marginBottom: "15px", color: "#505050" }}>
                    If you have any suggestions or questions, you can contact us
                    by pressing the email button below
                  </p> */}

                  <a
                    href="mailto:office.matchpredictor@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "#5c0e5a",
                    }}
                  >
                    <Image
                      src="/ContactUs 1.jpg"
                      width={250}
                      height={250}
                      alt="menulogo"
                      style={{ color: "#ffffff" }}
                      // className={isActive ? mainStyles["ball"] : ""}

                      // onClick={handleClick}
                    />
                  </a>
                  <hr
                    style={{
                      display: "block",
                      width: "90%",
                      maxWidth: "350px",
                      border: "0",
                      height: "1px",
                      borderTop: "1px solid #c5c5c5",
                    }}
                  />
                  <h5
                    className={aboutStyles.header}
                    style={{
                      marginBottom: "0",
                      color: "#757575",
                      fontWeight: "bold",
                      textShadow: "none",
                      fontSize: "1.2rem",
                    }}
                  >
                    <span style={interFont.style}>Contacts</span>
                  </h5>
                  <p
                    style={{
                      marginTop: "10px",
                      marginBottom: "30px",
                      color: "#9c9c9c",
                    }}
                  >
                    <span style={interFont.style}>
                      Bulgaria, Nessebar 8640, Chaika.
                    </span>
                  </p>
                </article>
                <a
                  href="https://www.buymeacoffee.com/maddealer"
                  target="_blank"
                  style={{}}
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                    alt="Buy Me A Coffee"
                    style={{ width: "150px", height: "40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
