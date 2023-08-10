import ContextApi from "../app/api/ContextApi"; 
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextApi>
        <Component {...pageProps} />
    </ContextApi>
  );
}

export default MyApp;