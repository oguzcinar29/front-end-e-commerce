import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import MiniCart from "./MiniCart";
import Button from "@mui/material/Button";

function Cart() {
  const { all_product, cartItems, removeFromCart, total } =
    useContext(ShopContext);
  const [code, setCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setCode("");
  }

  return (
    <section className="cart">
      <div className="cart-box">
        <div className="small-cart-text">
          <p>Products</p>
          <p className="title">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr></hr>
        <div className="create-carts">
          {all_product?.map((item, index) => {
            if (cartItems[index] !== 0) {
              const newItem = all_product[index - 1];
              console.log(newItem.new_price);
              return (
                <MiniCart
                  removeFromCart={removeFromCart}
                  {...newItem}
                  key={index}
                  id={index}
                  howMany={cartItems[index]}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="bottom-area">
          <div className="total-box">
            <h2>Cart Totals</h2>
            <div className="same">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr></hr>
            <div className="same">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="same more-weight">
              <p>Total</p>
              <p>${total}</p>
            </div>
            <hr></hr>
          </div>
          <div className="promo-box">
            <p>If you have a promo code.Enter it here</p>
            <form onSubmit={handleSubmit} className="form">
              <input
                onChange={(e) => setCode(e.target.value)}
                type="text"
                value={code}
                placeholder="promo code"
              ></input>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
