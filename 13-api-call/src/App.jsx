import axios from "axios";
import { useState } from "react";

function App() {
  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/20"
  //   );
  //   const data = await response.json();
  //   console.log(data);

  // };
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setData(data);
    console.log(data);
  };

  return (
    <div>
      <button className="btn" onClick={getData}>
        Get Data
      </button>
      <div>
        {data.map((e, id) => {
          return (
            <div>
              <img src={e.url} alt="" width={"30px"} height={"30px"} />
              <h1>
                {e.author},{id + 1}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
