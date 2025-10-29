import { createContext, useState } from "react";

export const counterDataContext = createContext();

const CounterContext = (props) => {
  const [data, setData] = useState(0);

  const changeCount = () => {
    console.log("data changed");
    setData(data + 1);
  };

  const value = { data, changeCount };

  return (
    <div>
      <counterDataContext.Provider value={value}>
        {props.children}
      </counterDataContext.Provider>
    </div>
  );
};

export default CounterContext;
