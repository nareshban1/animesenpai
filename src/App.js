import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme} from "./themes";
import {Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";



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
  
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      
        </Main>
        <Footer/>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
