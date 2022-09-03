import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <div className="cart">
      <FaCartPlus className="icon" size="30px" onClick={handleBasketShow} />
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
