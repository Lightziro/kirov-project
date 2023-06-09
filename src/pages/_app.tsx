import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
