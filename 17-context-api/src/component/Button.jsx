import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
import { counterDataContext } from "../context/CounterContext";

function Button() {
  const { theme, changeTheme } = useContext(ThemeDataContext);
  const { data, changeCount } = useContext(counterDataContext);

  return (
    <div>
      <button onClick={changeTheme}>
        Change Theme To {theme === "light" ? "dark" : "light"}
      </button>
      <div>{data}</div>
      <button onClick={changeCount}>Add Count {data}</button>
    </div>
  );
}

export default Button;
