import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/slice/cart.slice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const itemLength = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  console.log(totalPrice);

  return (
    <div className="nav_bar sticky-top">
      <div className="left">
        <h3>Redux Toolkit</h3>
      </div>
      {totalPrice > 0 && (
        <div className="middle">
          <button className="btn btn-warning ">
            <h4>Cart Item Total Price = {totalPrice}</h4>
          </button>
        </div>
      )}
      <div className="right">
        <Link to={"/cart"}>
          <button type="button" className="btn btn-primary position-relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {itemLength.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
