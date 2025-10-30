import { useMemo } from "react";
import { useState } from "react";

const Cart = () => {
  const [cart] = useState([
    {
      id: 1,
      name: "laptop",
      price: 2000,
    },
    {
      id: 2,
      name: "I-phone",
      price: 70000,
    },
    {
      id: 3,
      name: "Mac",
      price: 86000,
    },
  ]);

  const [discount, setDiscount] = useState(0);

  //   const totalPrice = cart.reduce((total, item) => {
  //
  //     return total + item.price;
  //   }, 0);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      console.log("Calculating....");
      total + item.price;
    }, 0);
  }, [cart]);

  return (
    <div>
      <h1>These is Cart</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              {item.name} : {item.price}
            </h3>
          </div>
        );
      })}
      <h1>Total Price : {totalPrice}</h1>
      <button
        onClick={() => {
          setDiscount(discount + 10);
          console.log("btn clicked");
        }}
      >
        Discount
      </button>
    </div>
  );
};

export default Cart;
