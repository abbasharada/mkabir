import { AppProps } from "next/app";
import "../styles/globals.css"
import { Layout } from "../components/layout";
import "../styles/footer.css";
import "../styles/NavbarHero.css";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
 
          <Layout>
            <Component {...pageProps} />
          </Layout>
    
  );
};

export default MyApp;