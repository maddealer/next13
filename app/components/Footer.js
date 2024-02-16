"use client";
import footerStyles from "./Footer.module.css";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import localFont from "next/font/local";

const interFont = localFont({
  src: "../../fonts/Inter-VariableFont_slnt,wght.ttf",
});
const dayseOne = localFont({ src: "../../fonts/DaysOne-Regular.ttf" });

const Footer = () => {
  return (
    <div className={footerStyles.main0} style={{ alignItems: "center" }}>
      <footer
        className={footerStyles.main}
        style={{ maxWidth: "500px", alignItems: "center" }}
      >
        <div
          className={footerStyles.container2}
          style={{
            marginTop: "0px",
            width: "100%",
            color: "#7A8773",
            fontSize: "1rem",
            padding: "0 5px",
          }}
        >
          <ul style={{ color: "#7A8773", paddingLeft: "15px" }}>
            <li>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/predictions"
              >
                <span style={interFont.style}>Predictions</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/crystal-ball"
              >
                <span style={interFont.style}>CrystalBall</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/about"
              >
                <span style={interFont.style}>About</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/contacts"
              >
                <span style={interFont.style}>Contacts</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/terms"
              >
                <span style={interFont.style}>TermsOfUse</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#7A8773",
                }}
                href="/privacy"
              >
                <span style={interFont.style}>PrivacyPolicy</span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={footerStyles.container2}
          style={{
            marginTop: "0px",
            marginBottom: "10px",
            fontSize: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            color: "#7A8773",
            padding: "0px 5px",
          }}
        >
          <p>© MatchPredictor.net / All Rights Reserved. 18+</p>
        </div>

        <div className={footerStyles.container1} style={{ gap: "10px" }}>
          <FacebookShareButton
            url={"https://matchpredictor.net"}
            quote={"Free & Simple Football Match Predictions app."}
            hashtag={"#football"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            url={"https://matchpredictor.net"}
            appId={""}
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
          <TelegramShareButton
            url={"https://matchpredictor.net"}
            title={"Free & Simple Football Match Predictions app."}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={"https://matchpredictor.net"}
            title={"Free & Simple Football Match Predictions app."}
            blankTarget="true"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          {/* <FacebookShareButton
          url={"https://matchpredictor.net"}
          quote={"Free & Simple Football Match Predictor"}
          hashtag={"#football"}
          description={"Free & Simple Football Match Predictor"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        &nbsp;&nbsp;
        <br />
        <WhatsappShareButton
          url={"https://matchpredictor.net"}
          quote={"Free & Simple Football Match Predictor"}
          hashtag={"#football"}
        >
          <WhatsappIcon size={32} round></WhatsappIcon>
        </WhatsappShareButton>
        &nbsp;&nbsp;
        <br />
        <TwitterShareButton
          url={"https://matchpredictor.net"}
          title={"Match Predictor"}
          via={"MatchPredictor3"}
          hashtags={["free", "football", "soccer", "tips"]}
          className="Demo__some-network__share-button"
        >
          {" "}
          <TwitterIcon size={32} round></TwitterIcon>
        </TwitterShareButton>
        &nbsp;&nbsp;
        <TelegramShareButton
          url={"https://matchpredictor.net"}
          title={"Free & Simple Football Match Predictor"}
        >
          <TelegramIcon size={32} round></TelegramIcon>
        </TelegramShareButton> */}
        </div>
        <div
          className={footerStyles.container2}
          style={{
            marginTop: "30px",
            marginBottom: "10px",
            fontSize: "0.8em",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "0",
            color: "#7A8773",
          }}
        >
          <p>
            <span style={interFont.style}>
              For help with gambling addiction visit
            </span>
          </p>{" "}
          <a
            href="https://www.begambleaware.org/"
            target={"_blank"}
            rel="noopener noreferrer external"
          >
            www.begambleaware.org
          </a>
        </div>
        {/* <div
        className={footerStyles.container2}
        style={{ marginTop: "10px", marginBottom: "10px", fontSize: "0.7em" }}
      >
        <p>
          For help with gambling addiction visit{" "}
          <a
            href="https://www.begambleaware.org/"
            target={"_blank"}
            rel="noopener noreferrer external"
          >
            www.begambleaware.org
          </a>
        </p>
      </div> */}
        {/* <div
          className={footerStyles.container2}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </div> */}
        <div className={footerStyles.container2}>
          <span style={{ fontSize: "0.8em", color: "#7A8773" }}>
            <span style={interFont.style}>Created by maddealer 2023</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
