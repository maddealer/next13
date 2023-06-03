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
// import {
//   FacebookShareButton,
//   TelegramShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";
// import {
//   FacebookIcon,
//   TelegramIcon,
//   TwitterIcon,
//   WhatsappIcon,
// } from "react-share";

const Footer = () => {
  return (
    <footer className={footerStyles.main}>
      <div
        className={footerStyles.container2}
        style={{
          marginTop: "20px",
          flexWrap: "wrap",
          gap: "10px",
          padding: "0 20px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/predictions"
        >
          Predictions
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/crystal-ball"
        >
          CrystalBall
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/about"
        >
          About
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/contacts"
        >
          Contacts
        </Link>
        {/* </div>
      <div
        className={footerStyles.container2}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      > */}
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/terms"
        >
          TermsOfUse
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          href="/privacy"
        >
          PrivacyPolicy
        </Link>
      </div>

      <div
        className={footerStyles.container1}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        {" "}
        You can share on
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
          fontSize: "0.7em",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p>© MatchPredictor.net - all rights reserved. 18+</p>
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
      <div
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
      </div>
      <div className={footerStyles.container2}>
        <span style={{ fontSize: "0.6em" }}>Created by maddealer 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
