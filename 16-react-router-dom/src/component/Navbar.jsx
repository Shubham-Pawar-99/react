import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-cyan-900 text-white py-4 px-6 w-full flex items-center justify-between">
      <h2 className="font-bold text-xl">R-R-D</h2>
      <div className="flex gap-8 items-center">
        <Link className="font-bold text-lg" to="/">
          Home
        </Link>
        <Link className="font-bold text-lg" to="/about">
          About
        </Link>
        <Link className="font-bold text-lg" to="/cources">
          Cource
        </Link>
        <Link className="font-bold text-lg" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
