import "@/styles/globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
}); 

export default function App({ Component, pageProps }) {
  return (
    <div className={barlow.className}>
      <Component {...pageProps} />
    </div>
  );
}
