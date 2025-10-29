import { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((perv) => (perv === "light" ? "dark" : "light"));
  };

  const value = { theme, changeTheme };

  return (
    <div>
      <ThemeDataContext.Provider value={value}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
