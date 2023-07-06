import React, { useContext } from "react";
import "./card.css";
import CartContext from "../context/CartContext";
export default function Card({ ele }) {
  const { items, setItems } = useContext(CartContext);

  const addToCart = () => {
    const newItems = [...items];

    const index = newItems.findIndex((item) => item.id == ele.id);
    if (index == -1) {
      newItems.push({
        ...ele,
        quantity: 1,
      });
    } else {
      newItems[index].quantity += 1;
    }
    setItems(newItems);
  };
  return (
    <div className="card">
      <img src={ele.image} />
      <div className="text">
        <h3>{ele.title}</h3>
        <p>{ele.style}</p>
        <span>{ele.price}</span>
      </div>
      <div className="add">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
