import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Shubham-Pawar-99")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-3xl bg-gray-600 text-white m-4 p-4 flex justify-end items-center gap-2 flex-row-reverse">
      <div>
        <h1>{data.name}</h1>
        <h2>
          Bio : <span>{data.bio}</span>
        </h2>
        <h2>Followers : {data.followers} </h2>
        <h2>Following : {data.following} </h2>
      </div>
      <img
        src={data.avatar_url}
        alt={data.avatar_url}
        width={300}
        className="my-2 rounded-full"
      />
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/Shubham-Pawar-99");
  return res.json();
};
