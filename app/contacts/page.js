import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import aboutStyles from "../about/About.module.css";

const Contacts = () => {
  return (
    <>
      <Menu />
      <div className={aboutStyles.bg} style={{ minHeight: "100vh" }}>
        <div className={aboutStyles.container}>
          <h5 className={aboutStyles.header}>Contacts</h5>
          <article>
            <p style={{ marginBottom: "15px", color: "#505050" }}>
              If you have any suggestions or questions, you can contact us by
              pressing the email button below
            </p>

            <a
              href="mailto:office.matchpredictor@gmail.com"
              style={{
                textDecoration: "none",
                color: "#5c0e5a",
              }}
            >
              <FontAwesomeIcon icon={faMailBulk} size="4x" />
            </a>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "30px",
                color: "#505050",
              }}
            >
              Bulgaria, Nessebar 8640, Chaika.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Contacts;
