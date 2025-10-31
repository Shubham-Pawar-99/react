import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../../redux/slice/cart.slice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <div className="container my-3">
      {cartItems.length == 0 && (
        <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to={"/"}>
            <button className="btn btn-warning">Continue Shopping...</button>
          </Link>
        </div>
      )}

      {cartItems.map((item) => {
        return (
          <div key={item.id} className="container" style={{ width: "700px" }}>
            <div className="card mb-3 bg-dark text-light text-center">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      src={item.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary">
                      {item.price}
                      {" ₹ "}
                    </button>
                    <button className="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {cartItems.length != 0 && (
        <div className="text-center">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
