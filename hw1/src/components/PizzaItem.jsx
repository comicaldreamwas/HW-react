import  { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./PizzaItem.css";

const PizzaItem = ({ pizza }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1); 
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1); // Збільшуємо кількість
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 0)); // Зменшуємо кількість, мінімум 0
  };

  return (
    <li className={`pizza-item ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p>Ingredients: {pizza.ingredients.join(", ")}</p>
        {pizza.soldOut ? (
          <p className="sold-out-text">Sold Out</p>
        ) : (
          <>
            <p>Price: ${pizza.unitPrice}</p>
            {quantity === 0 ? (
              <Button onClick={handleAddToCart}>Add to cart</Button>
            ) : (
              <div className="quantity-control">
                <button onClick={decrementQuantity} className="quantity-btn">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={incrementQuantity} className="quantity-btn">+</button>
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
};

PizzaItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PizzaItem;
