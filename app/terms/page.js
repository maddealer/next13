import Footer from "../components/Footer";
import Menu from "../components/Menu";
import policyStyles from "./Terms.module.css";
import "../global.css";

const Terms = () => {
  return (
    <>
      <Menu />
      <div className={policyStyles.bg}>
        <div className={policyStyles.container}>
          <h3
            style={{
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            Terms of Use of MatchPredictor.net
          </h3>

          <article>
            <p className={policyStyles.termsP}>
              The general conditions of the site "MatchPredictor.net" contain
              rules for the use of the site's resources by each visitor.
            </p>
            <p className={policyStyles.termsP}>
              By using the site, you understand and agree to the terms of the
              site described on this page.
            </p>
            <p className={policyStyles.termsP}>
              The site is for statistical purposes only and does not accept
              bets, but there are links to betting sites! You must be over 18 to
              bet!
            </p>
            <p className={policyStyles.termsP}>
              Whether you use our site and our information is entirely your
              responsibility.
            </p>
            <p className={policyStyles.termsP}>
              If you continue to use the site, you agree to our terms and
              conditions.
            </p>
            <p className={policyStyles.termsP}>
              <b>
                If you are under 18 years of age, please leave our site
                immediately.
              </b>
            </p>
            <p className={policyStyles.termsP}>
              The services on the site are expressed in the publication of
              information and predictions for upcoming football matches.{" "}
              <b>
                All visitors to our site are considered users of our resources
                and we are not responsible for any financial and/or moral losses
              </b>
              .
            </p>
            <p className={policyStyles.termsP}>
              Forecasts are based on mathematical calculations, but{" "}
              <b> do not </b>
              guarantee profit and <b> do not</b> guarantee 100% success rate.
            </p>
            <p className={policyStyles.termsP}>
              "MatchPredictor.net" urges you to bet responsibly and wisely. The
              site is not responsible for the accuracy of the published
              information.
            </p>
            <p className={policyStyles.termsP}>
              The site administrator has the right at its discretion to limit
              access to all or part of the services, as well as to terminate
              their use by part or all of its users.
            </p>
            <p className={policyStyles.termsP}>
              MatchPredictor.net owns the rights to the text and graphics of the
              site. The use of materials is permissible only after the written
              consent of the site team within the framework of the law.{" "}
            </p>
            <p className={policyStyles.termsP}>
              There may be links posted on the site that point to other Internet
              addresses that do not work. The site is not responsible for
              content outside of the MatchPredictor.net domain.
            </p>
            <p className={policyStyles.termsP}>
              The terms of use of the site may be changed at any time without
              notice to the users of the site. When new conditions are added or
              current ones are changed, the date of last revision of this page
              will be changed.
            </p>
          </article>
          <p className={policyStyles.termsP}>Last edited on 01/10/2023.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
