import Footer from "../components/Footer";
import Menu from "../components/Menu";
import aboutStyles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Menu />
      <div className={aboutStyles.bg}>
        <div className={aboutStyles.container}>
          <article>
            <h5 className={aboutStyles.header}>About Us</h5>
            <p className={aboutStyles.aboutP}>
              MatchPredictor.net is a PWA( Progressive Web App ), it can be
              installed on any device, when you choose your browser option "Add
              to home screen".
            </p>
            <h5 style={{ marginBottom: "10px" }}>For IOS Install</h5>
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
              For Android Install
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
              Our Goal
            </h4>
            <p className={aboutStyles.aboutP}>
              The idea behind MatchPredictor.net is to provide a simple and easy
              to use application.
            </p>
            <p className={aboutStyles.aboutP}>
              We use one of the most common API, with specially developed
              algorithms and mathematical calculations.
            </p>
            <p className={aboutStyles.aboutP}>
              Some of the parameters used for the predictions are:
            </p>
            <ul className={aboutStyles.aboutUl}>
              <li>
                Historical stats (avg goals scored, clean sheets, etc) of team A
                vs teams similar to team B.
              </li>
              <li>Poisson probabilities.</li>
              <li>League statistics.</li>
              <li>How the two teams compare against the league.</li>
              <li>Other factors (stadium capacity, distance between teams)</li>
            </ul>
            <p className={aboutStyles.aboutP}>
              Maximum time ahead before a prediction is available is 48 hours.
            </p>
          </article>
          <article>
            <p className={aboutStyles.aboutP}>
              If a certain event does not appear as a prediction, there could be
              multiple causes for that including:
            </p>
            <ul className={aboutStyles.aboutUl}>
              <li>The league / country is not supported.</li>
              <li>The event is over 48h ahead.</li>
              <li>It involves a newly promoted or relegated team.</li>
              <li>
                There aren't enough games played against similar adversaries.
              </li>
              <li>
                The prediction models are not confident enough to predict the
                outcome.
              </li>
            </ul>
          </article>
          <article>
            <p className={aboutStyles.aboutP}>
              In the future, the application will develop and new options will
              be added.
            </p>
          </article>
          <p
            style={{
              color: "#505050",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            Good Luck & Have Fun.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
