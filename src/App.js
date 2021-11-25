import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "./themes";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { AnimeInfo } from "./containers/AnimeInfo/AnimeInfo";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import SearchResults from "./containers/SearchResults/SearchResults";
import AnimeList from "./containers/AnimeList/AnimeList";
import Random from "./containers/Random/Random";
import { AnimatePresence } from 'framer-motion/dist/es/index';
import CharacterList from "./containers/CharacterList/CharacterList";
import CharacterInfo from "./containers/CharacterInfo/CharacterInfo";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={MainTheme}>
      <AppContainer>
        <Main>
          <NavBar />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/animeinfo/:id" element={<AnimeInfo />} />
              <Route exact path="/searchResults/:query" element={<SearchResults />} />
              <Route exact path="/animelist/:name/:id" element={<AnimeList />} />
              <Route exact path="/randomlist" element={<Random />} />
              <Route exact path="/allcharacters/:id/:title" element={<CharacterList />} />
              <Route exact path="/characterinfo/:id" element={<CharacterInfo />} />
            </Routes>
          </AnimatePresence>
        </Main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
