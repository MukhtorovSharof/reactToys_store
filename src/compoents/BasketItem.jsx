import React from "react";
import { ListGroupItem } from "reactstrap";
import { AiFillCloseCircle } from "react-icons/ai";

export default function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeItem = Function.prototype,
    decrementItem = Function.prototype,
    incrementItem = Function.prototype,
  } = props;
  return (
    <>
      <ListGroupItem className="d-flex justify-content-between align-center">
        <div className="w-50">
          {name}: {quantity} x {price}$ = {quantity * price}$
        </div>
        <div>
          <span>
            <button
              className="btn btn-danger"
              onClick={() => decrementItem(id)}
            >
              -
            </button>
          </span>
          <span className="ms-2 me-2">{quantity}</span>
          <span>
            <button
              className="btn btn-success"
              onClick={() => incrementItem(id)}
            >
              +
            </button>
          </span>
        </div>
        <div>
          <AiFillCloseCircle
            onClick={() => removeItem(name)}
            className="basket-item-close"
            size="28px"
            color="#085f6e"
          />
        </div>
      </ListGroupItem>
    </>
  );
}
