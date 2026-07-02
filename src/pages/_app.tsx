import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/NavbarHero.css";
import "../styles/contact.css";
import "../styles/faq.css";

import { Layout } from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;