import  { useState } from "react";

import Button from '../Button/Button';
import './PizzaItem.css';

const PizzaItem = ({ pizza }) => {
  
  const [counter, setCounter] = useState(null);

  
  const handleIncrease = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

 
  const handleDecrease = () => {
    setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : null)); // Повертає до кнопки, якщо значення <= 1
  };

  
  const handleAddToCart = () => {
    setCounter(1); 
  };

  return (
    <div className={`pizza-item ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p>Ingredients: {pizza.ingredients.join(", ")}</p>
        {pizza.soldOut ? (
          <p className="sold-out-text">Sold Out</p>
        ) : (
          <p>Price: ${pizza.unitPrice}</p>
        )}
      </div>
      {counter === null ? (
        
        <Button onClick={handleAddToCart}></Button>
      ) : (
       
        <div className="counter-container">
          <button className="counter-btn" onClick={handleDecrease}>-</button>
          <p className="counter-display">Items in cart: {counter}</p>
          <button className="counter-btn" onClick={handleIncrease}>+</button>
        </div>
      )}
    </div>
  );
};



export default PizzaItem;
