import '../styles/globals.scss';
import {AppWrapper} from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
  );
}

export default MyApp
