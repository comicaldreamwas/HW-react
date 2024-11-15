import Input from './Input';
import Button from './Button';


const Main = () => {
  return (
    <main>
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
      <Input placeholder="Your full name" />
      <Button>Start Order</Button>
    </main>
  );
};

export default Main;