import Menu from "../components/Menu";
import policyStyles from "../terms/Terms.module.css";
const Privacy = () => {
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
            Privacy Policy of MatchPredictor.net
          </h3>
          <p className={policyStyles.termsP}>
            In order to offer an easy, convenient and useful online application,
            we use cookies. Our cookie policy explains the types of technologies
            we use, what they do and what your choices are about their use.
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            What are cookies?
          </p>{" "}
          <p className={policyStyles.termsP}>
            Cookies are small pieces of data that are sent to your browser from
            a web server and stored on your device so that the site can
            recognize your device. There are two types of cookies – persistent
            and temporary or session cookies. There are also third-party
            cookies. They may be placed on your device by someone who provides a
            service for us, for example to help us understand how our service is
            used. Third-party cookies may also be placed on your device by our
            business partners so that they can use them to advertise products
            and services to you elsewhere on the Internet. In general, the
            cookies we use do not allow us to identify actual people.
          </p>
          <p className={policyStyles.termsP}>
            What types of cookies do we use and for what purpose?
          </p>{" "}
          <p className={policyStyles.termsP}>
            We only use third-party cookies and do not set our own cookies
            except for the cookie that serves to save information about whether
            or not you have accepted the cookie policies (these policies). Her
            name is cookieconsent. This is a persistent cookie that has a
            validity period of 1 year.
          </p>
          <p className={policyStyles.termsP}>
            We use third-party Google Analytics cookies to generate statistics
            about site traffic, traffic sources and usage. Ads on the site also
            use third-party Google AdSense cookies. The bookmakers' ads we show
            may also use their own cookies (third-party cookies). The
            third-party cookies we use are managed by the respective sites and
            are not controlled by us. Some of them can be turned off using the
            general settings of your browser. For others, it is necessary to
            visit the respective sites and follow the instructions provided -{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=en"
              target={"_blank"}
              rel="noopener noreferrer external"
            >
              Google's Cookie Policies
            </a>
          </p>
          <p className={policyStyles.termsP}>
            How long will cookies stay on my device?
          </p>
          <p className={policyStyles.termsP}>
            The length of time a cookie will remain on your computer or mobile
            device depends on whether it is a persistent or session cookie.
            Persistent cookies are stored as a file on your computer or mobile
            device for a long period of time until your browser deletes them or
            they lose their validity. Session cookies are temporarily placed on
            your computer when you visit our site, but are automatically deleted
            when you close the page.
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            What can you do if you do not want cookies to be used or want them
            removed, or if you want to opt out of targeting based on your
            interests?
          </p>
          <p className={policyStyles.termsP}>
            Most browsers allow you to view, manage, delete and block cookies
            for a website. Note that if you delete all cookies, all preferences
            you have set will be deleted, including the ability to opt out of
            cookies, as the feature itself requires an opt-out cookie to be
            placed on your device. Most browsers provide help pages related to
            cookie management. The links below will help you find the settings
            for some commonly used browsers: Google Chrome Internet Explorer
            Mozilla Firefox Safari (Desktop) Safari (Mobile) Android Browser
            Opera Opera Mobile For other browsers or additional information on
            cookie management, please read the documentation provided by your
            browser manufacturer or visit: www.aboutcookies.org or
            www.cookiecentral.com/faq/. Additionally, on your iPhone, iPad, or
            Android, you can change your device settings to control whether you
            see online ads based on your interests. Please note that if you
            restrict the ability of websites and applications to use cookies,
            you may degrade your overall user experience and/or lose the ability
            to access the Services because it will no longer be personalized for
            you. It may also prevent you from saving custom settings, such as
            your login information.
          </p>
          <p className={policyStyles.termsP}>
            Changes to our cookie policy Any future changes to our Cookie Policy
            will be posted on this page. All changes take effect immediately.
          </p>
          <h5 className={policyStyles.termsP}>
            By using this website, you agree that we may place these cookies on
            your computer / device for the purposes indicated.
          </h5>
          <p className={policyStyles.termsP}>Last edited on 01/10/2023.</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
