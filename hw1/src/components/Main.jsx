
import pizzas from '../data';
import './Menu.css';
import PizzaItem from './PizzaItem/PizzaItem';


const Menu = () => {
  
  
  return (
    <div className="menu">
      <ul className="pizza-list">
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;