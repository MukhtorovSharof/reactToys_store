import React from "react";
import GoodItem from "./GoodItem";
import imgNothing from "../images/20.png";

export default function GoodList(props) {
  const { goods = [], addToBasket } = props;
  return (
    <>
      {goods.length ? (
        goods.map((item) => <GoodItem key={item.id} {...item} addToBasket={addToBasket} />)
      ) : (
        <div className="text-center">
          <div className="nothingClass">
            <img src={imgNothing} alt="Nothing Found" />
          </div>
        </div>
      )}
    </>
  );
}
