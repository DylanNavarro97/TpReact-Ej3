import { useState } from "react";

export const Hello = ({ saludo }) => {
  const [onClick, setonClick] = useState("");

  const handleClick = () => {
    setonClick(" (from changed state)");
  };

  return (
    <>
      <div>Hello {saludo}{onClick}!</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
