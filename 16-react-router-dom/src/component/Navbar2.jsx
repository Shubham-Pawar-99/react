import { useNavigate } from "react-router-dom";

function Navbar2() {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate("/");
  };
  return (
    <div className="bg-cyan-700">
      <button
        className="bg-green-700 rounded py-2 px-6 text-white m-4 active:scale-95 cursor-pointer font-medium"
        onClick={btnClick}
      >
        Redirect To Home Page
      </button>
      <button
        className="bg-amber-700 rounded py-2 px-6 text-white m-4 active:scale-95 cursor-pointer font-medium"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-blue-700 rounded py-2 px-6 text-white m-4 active:scale-95 cursor-pointer font-medium"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Navbar2;
