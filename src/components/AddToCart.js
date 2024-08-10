import { useState } from "react";
import Button from "./Button.js";
import Header from "./Header.js";

function Cart() {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <Header count={count} />
      <Button handlePlusClick={handlePlusClick} />
    </div>
  );
}

export default Cart;
