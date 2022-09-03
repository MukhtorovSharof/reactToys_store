import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import BasketItem from "./BasketItem";
import { AiOutlineClose } from "react-icons/ai";

function BasketList(props) {
  let {
    order = Array.prototype,
    handleBasketShow = Function.prototype,
    removeItem = Function.prototype,
    decrementItem = Function.prototype,
    incrementItem = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="basket-list">
      <ListGroup>
        <ListGroupItem className="listItemGroup">Basket</ListGroupItem>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                key={item.id}
                {...item}
                removeItem={removeItem}
                decrementItem={decrementItem}
                incrementItem={incrementItem}
              />
            );
          })
        ) : (
          <ListGroupItem>Basket is empty!</ListGroupItem>
        )}
        <ListGroupItem className="listItemGroup">
          Total Price: {totalPrice} <b>$</b>
        </ListGroupItem>
        <AiOutlineClose
          className="basket-close"
          onClick={() => handleBasketShow(false)}
        />
      </ListGroup>
    </div>
  );
}

export default BasketList;
