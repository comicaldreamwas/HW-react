import PropTypes from 'prop-types';

const Input = ({ placeholder }) => {
   return (
      
    <input type="text" placeholder={placeholder} aria-label={placeholder} />
   );
 };
 Input.propTypes = {
   placeholder: PropTypes.node.isRequired,
 };
 
 export default Input;

