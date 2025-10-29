import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
import Nav2 from "./Nav2";

function Navbar() {
  const { theme } = useContext(ThemeDataContext);
  console.log(theme);
  return (
    <div className={theme}>
      <h1>{theme.toUpperCase()}</h1>
      <Nav2 />
    </div>
  );
}

export default Navbar;
