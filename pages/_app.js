import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import "../styles/fonts.css";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
