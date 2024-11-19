import  { useState } from 'react';
import pizzas from '../data';
import './Menu.css';

const Menu = () => {
  const [message, setMessage] = useState(''); // Стан для повідомлення

  const handleAddToCart = (pizza) => {
    setMessage(`${pizza.name} added to cart!`); // Оновлення повідомлення
    setTimeout(() => setMessage(''), 3000); // Автоматичне очищення повідомлення через 3 секунди
  };


  return (
    <div className="menu">
       {message && <div className="cart-message">{message}</div>} {/* Повідомлення на сайті */}
      <header>
        <div className="logo">PIZZA DAY</div>
        <input type="text" className="search-bar" placeholder="Search for the order #"/>
        
    </header>
      <ul className="pizza-list">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className={`pizza-item ${pizza.soldOut ? 'sold-out' : ''}`}>
            <img src={pizza.imageUrl} alt={pizza.name} />
            <div className="pizza-info">
              <div className="pizza-info-text">
                <h2>{pizza.name}</h2>
                <p>Ingredients: {pizza.ingredients.join(', ')}</p>
                {pizza.soldOut ? (
                  <p className="sold-out-text">Sold Out</p>
                ) : (
                  <p>Price: ${pizza.unitPrice}</p>
                )}
              </div>
              {!pizza.soldOut && (
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(pizza)}
                >
                  Add to cart
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
