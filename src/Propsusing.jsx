import  { useState } from "react";

function UsingProp(prop) {
  return (
    <button onClick={prop.onClick}>{prop.button}</button>
  );
}

function Propsusing() {
  const [abc, setAbc] = useState("Select the topic");
  const handleButtonClick = (buttonSelected) => {
    setAbc(buttonSelected);
    console.log(abc);
  };
  return (
    <>
      <div>
        <UsingProp onClick={() => handleButtonClick("Component")} button="Component" />
        <UsingProp onClick={() => handleButtonClick("JSX")} button="JSX" />
        <UsingProp onClick={() => handleButtonClick("Props")} button="Props" />
      </div>
      {abc}
    </>
  );
}

export default Propsusing;
