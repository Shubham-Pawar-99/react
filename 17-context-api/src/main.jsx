import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext.jsx";
import "./index.css";
import CounterContext from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <CounterContext>
      <App />
    </CounterContext>
  </ThemeContext>
);
