import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Add() {
  const { items, setItems } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const index = items.findIndex((item) => item.id == id);
    if (index != -1) {
      const newItems = [...items];
      newItems[index].quantity += 1;
      setItems(newItems);
    }
  };
  const decreaseQuantity = (id) => {
    const index = items.findIndex((item) => item.id == id);
    if (index != -1) {
      const newItems = [...items];
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };
  const deleteItem = (id) => {
    const index = items.findIndex((item) => item.id == id);
    if (index != -1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };
  return (
    <div className="cart">
      {items.map((item) => (
        <div className="cart-item">
          <img src={item.image} />
          <div className="text">
            <h3>{item.title}</h3>
            <p>{item.style}</p>
            <span>{item.price * item.quantity}</span>
            <span>quantity: {item.quantity}</span>
            <div>
              <span onClick={() => increaseQuantity(item.id)}>+</span>
              <span onClick={() => decreaseQuantity(item.id)}>-</span>
            </div>
            <span onClick={() => deleteItem(item.id)}>x</span>
          </div>
        </div>
      ))}
      <p>
        Total:
        {items.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.quantity,
          0
        )}
      </p>
    </div>
  );
}
