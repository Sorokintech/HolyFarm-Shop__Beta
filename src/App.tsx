import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PagesContainer from "./components/PagesContainer/PagesContainer";
import PagesRouter from "./components/PagesRouter/PagesRouter";
import NavBar from "./components/NavBar/NavBar";
import AdsBar from "./components/AdsBar/AdsBar";
import { ThemeContext, themes } from "./theme/Theme";

import "./App.scss";
function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: () => {
          setTheme(theme.name !== "light" ? themes.light : themes.dark);
        },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <PagesContainer>
            <PagesRouter />
          </PagesContainer>
          <AdsBar />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
