import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "./themes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { AnimeInfo } from "./containers/AnimeInfo/AnimeInfo";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import SearchResults from "./containers/SearchResults/SearchResults";
import AnimeList from "./containers/AnimeList/AnimeList";

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
    <ThemeProvider theme={MainTheme}>
      <AppContainer>
        <Main>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/animeinfo/:id" element={<AnimeInfo />} />
            <Route exact path="/searchResults/:query" element={<SearchResults />} />
            <Route exact path="/animelist/:name/:id" element={<AnimeList />} />
          </Routes>
        </Main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
