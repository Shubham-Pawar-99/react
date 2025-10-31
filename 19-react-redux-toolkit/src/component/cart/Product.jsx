import { Products } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCartItems } from "../../redux/slice/cart.slice";

const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  const handleAddtoCart = (item) => {
    console.log("clicked");
    dispatch(addToCart(item));
  };

  return (
    <div className="container">
      <div className="row">
        {Products.map((item) => {
          return (
            <div key={item.id} className="container col-md-4 my-5">
              <div
                className="card bg-dark text-white"
                style={{ width: "18rem" }}
              >
                <div className="p-3 d-flex justify-content-center align-items-center">
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary mx-3">
                    {item.price}
                    {" ₹ "}
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleAddtoCart(item)}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
