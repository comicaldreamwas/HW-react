import { useState } from "react";
import Input from "../Input"; 
import Button from "../Button/Button"; 

const Form = () => {
  const [userName, setUserName] = useState(""); 

  const handleInputChange = (event) => {
    setUserName(event.target.value); 
  };

  const handleButtonClick = () => {
    console.log(`User Name: ${userName}`); 
  };

  return (
    <div>
      {}
      <Input
        value={userName}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      {}
      <Button onClick={handleButtonClick}>Submit</Button>
    </div>
  );
};

export default Form;
