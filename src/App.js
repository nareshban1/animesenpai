import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useSelector } from "react-redux";
import {Switch, Route } from "react-router";
import { AnimeInfo } from "./containers/AnimeInfo/AnimeInfo";
import { Home } from "./containers/Home/Home";
import NavBar from "./components/Navbar";
import SearchResults from "./containers/SearchResults/SearchResults";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
`;


function App() {
  const theme = useSelector((state) => state.themeChanger.theme);



  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/animeinfo/:id" component={AnimeInfo} />
          <Route exact path="/searchResults/:title" component={SearchResults} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
