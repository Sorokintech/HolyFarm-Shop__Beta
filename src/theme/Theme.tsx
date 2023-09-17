import React, { useContext } from "react";

export const themes = {
  light: {
    name: "light",
    icon_color: "#000000",
  },
  dark: {
    name: "dark",
    // icon_color: "#ffffff",
    icon_color: "#939393",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
