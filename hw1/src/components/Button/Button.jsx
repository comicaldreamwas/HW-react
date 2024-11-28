
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children} Add to cart
    </button>
  );
};


export default Button;
