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
