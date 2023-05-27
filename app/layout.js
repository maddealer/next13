import Loading from "./loading";
import { Suspense } from "react";
import { Providers } from "../redux/provider";

export const metadata = {
  title: "Match Predictor",
  description:
    "Football Predictions Match Predictor Simple and free football soccer match predictions app. Pick up odds for your bets .",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </Suspense>
    </html>
  );
}
