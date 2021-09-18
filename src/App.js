import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useSelector } from "react-redux";
import { Trending } from "./components/Trending";
import { Router, Switch, Route } from "react-router";
import { AnimeInfo } from "./containers/AnimeInfo";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  min-height: 100vh;
  padding: 0px 20px;
`;


function App() {
  const theme = useSelector((state) => state.themeChanger.theme);

  const authorization = async () =>{
    var authorize = await fetch('https://api.aniapi.com/v1/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NyIsIm5iZiI6MTYzMTk2NjM2NSwiZXhwIjoxNjM0NTU4MzY1LCJpYXQiOjE2MzE5NjYzNjV9.0ESUhsqakW0lLQFaryayQGjRCRbSeRsmXq_WGMfPCBE',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log(authorize)
  }

  useEffect(() => {
    authorization();
  })

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route exact path="/animeinfo/:id" component={AnimeInfo} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
