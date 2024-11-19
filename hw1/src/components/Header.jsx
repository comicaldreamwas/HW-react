import Input from "./Input";

const Header = () => {
  return (
    <header>
      <div className="logo">PIZZA DAY</div>
      <Input type="text" className="search-bar" placeholder="Search for the order #"/>
    </header>
  );
};

export default Header;

