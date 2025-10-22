import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="flex justify-center gap-4 py-4">
        <Link className="text-xl font-semibold" to="/product/men">
          Men
        </Link>
        <Link className="text-xl font-semibold" to="/product/women">
          Women
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Product;
