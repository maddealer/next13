import Loading from "./loading";
import { Suspense } from "react";
import { Providers } from "../redux/provider";
import Menu from "./components/Menu";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import GoogleAnalytics from "./components/GoogleAnalitycs";
config.autoAddCss = false;
export const metadata = {
  title: "Match Predictor",
  description:
    "Football Predictions Match Predictor Simple and free football soccer match predictions app. Pick up odds for your bets .",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  stylesheet: [
    "https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css",
  ],
  openGraph: {
    title: "Match Predictor",
    description: "Free & Simple Football Match Predictions app.",
    url: "https://matchpredictor.net",
    siteName: "Match Predictor",
    images: [
      {
        url: "/facebookOG.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/twitterOG.png",
        width: 500,
        height: 500,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
        <body>
          <Providers>{children}</Providers>
        </body>
      </Suspense>
    </html>
  );
}
