import PropTypes from 'prop-types';
import Button from './Button';
import './PizzaItem.css';



const PizzaItem = ({ pizza }) => {
  return (
    <li className={`pizza-item ${pizza.soldOut ? 'sold-out' : ''}`}>
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
          <Button className="add-to-cart-btn">Add to cart</Button>
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