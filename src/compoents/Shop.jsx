import React, { useEffect, useState } from "react";
import GoodList from "./GoodList";
import Loading from "./Loading";
import { API_KEY, API_URL } from "../config";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { toast } from "react-toastify";

export default function Shop() {
  let [goods, setGoods] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [order, setOrder] = useState([]);
  let [isBasketShow, setIsBasketShow] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setIsLoading(false);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    console.log(item);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Good added to basket successfully!")
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const removeItem = (name) => {
    const newOrder = order.filter((item) => item.name !== name);
    setOrder(newOrder);
    toast.error("Good removed to basket!")
  };

  const decrementItem = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
    toast.warn("Good subtracted to basket - 1")
  };

  const incrementItem = (id) => {
    const itemOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(itemOrder);
    toast.success("Good added to basket + 1")
  };

  return (
    <div className="col-8 row searchMeal mx-auto">
      <div className="search-result mb-5">
        <div className="row ms-5">
          <div>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
          </div>
        </div>
        <div className="row">
          {isLoading ? (
            <Loading />
          ) : (
            <GoodList goods={goods} addToBasket={addToBasket} />
          )}
        </div>
        {isBasketShow && (
          <BasketList
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            removeItem={removeItem}
            order={order}
            handleBasketShow={handleBasketShow}
          />
        )}
      </div>
    </div>
  );
}
