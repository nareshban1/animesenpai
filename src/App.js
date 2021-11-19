import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme} from "./themes";
import {Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./helpers/ScrollToTop"


const AppContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;


function App() {

  return (
    <ThemeProvider theme={MainTheme} >
      <AppContainer>
        <Main>
        <NavBar/>
        <ScrollToTop>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        </ScrollToTop>
        </Main>
        <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
