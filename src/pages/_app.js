import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "../themes";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ScrollToTop from "../helpers/ScrollToTop";
import "../styles/globals.css";
import "plyr-react/dist/plyr.css";
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <ThemeProvider theme={MainTheme}>
        <AppContainer>
          <Main>
            <NavBar />
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} />
            </AnimatePresence>
          </Main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
