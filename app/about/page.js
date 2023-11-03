import Footer from "../components/Footer";
import Menu from "../components/Menu";
import aboutStyles from "./About.module.css";
import Image from "next/image";
import "../global.css";
import MainButtons from "../components/MainButtons";
import localFont from "next/font/local";

const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });
const About = () => {
  return (
    <>
      <div className={aboutStyles.main}>
        <div className={aboutStyles.box}>
          <div style={{ width: "100%", maxWidth: "860px" }}>
            <Menu />
            {/* <MainButtons /> */}
            <div className={aboutStyles.bg}>
              <div className={aboutStyles.container}>
                <article>
                  <h5
                    className={aboutStyles.header}
                    style={{
                      marginBottom: "0",
                      color: "#4f8230",
                      fontWeight: "100",
                      textShadow: "none",
                    }}
                  >
                    <span style={dayseOne.style}>About Us</span>
                  </h5>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      MatchPredictor.net is a PWA( Progressive Web App ), it can
                      be installed on any device, when you choose your browser
                      option "Add to home screen".
                    </span>
                  </p>
                  <h5 style={{ marginBottom: "10px" }}>
                    {" "}
                    <span style={interFont.style}>For IOS Install</span>
                  </h5>
                  <Image
                    style={{
                      height: "260px",
                      objectFit: "cover",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    src="/manuelIosdone.png"
                    width={300}
                    height={200}
                    alt="ball"
                  />

                  <h5 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <span style={interFont.style}>For Android Install</span>
                  </h5>

                  <Image
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    src="/andAdd.png"
                    width={100}
                    height={200}
                    alt="ball"
                  />
                </article>
                <article>
                  <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <span style={interFont.style}>Our Goal</span>
                  </h4>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      The idea behind MatchPredictor.net is to provide a simple
                      and easy to use application.
                    </span>
                  </p>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      We use one of the most common API, with specially
                      developed algorithms and mathematical calculations.
                    </span>
                  </p>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      Some of the parameters used for the predictions are:
                    </span>
                  </p>
                  <ul className={aboutStyles.aboutUl}>
                    <li>
                      <span style={interFont.style}>
                        Historical stats (avg goals scored, clean sheets, etc)
                        of team A vs teams similar to team B.
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={interFont.style}>
                        Poisson probabilities.
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={interFont.style}>League statistics.</span>
                    </li>
                    <li>
                      {" "}
                      <span style={interFont.style}>
                        How the two teams compare against the league.
                      </span>
                    </li>
                    <li>
                      <span style={interFont.style}>
                        Other factors (stadium capacity, distance between teams)
                      </span>
                    </li>
                  </ul>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      Maximum time ahead before a prediction is available is 48
                      hours.
                    </span>
                  </p>
                </article>
                <article>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      If a certain event does not appear as a prediction, there
                      could be multiple causes for that including:
                    </span>
                  </p>
                  <ul className={aboutStyles.aboutUl}>
                    <li>
                      {" "}
                      <span style={interFont.style}>
                        The league / country is not supported.
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={interFont.style}>
                        The event is over 48h ahead.
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span style={interFont.style}>
                        It involves a newly promoted or relegated team.
                      </span>
                    </li>
                    <li>
                      <span style={interFont.style}>
                        There aren't enough games played against similar
                        adversaries.
                      </span>
                    </li>
                    <li>
                      <span style={interFont.style}>
                        The prediction models are not confident enough to
                        predict the outcome.
                      </span>
                    </li>
                  </ul>
                </article>
                <article>
                  <p className={aboutStyles.aboutP}>
                    <span style={interFont.style}>
                      In the future, the application will develop and new
                      options will be added.
                    </span>
                  </p>
                </article>
                <p
                  style={{
                    color: "#505050",
                    marginTop: "40px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={interFont.style}>Good Luck & Have Fun.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
