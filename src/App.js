import { useState } from "react";
import  Header from "./components/Header.js";
import Products from "./components/Products.js";
import Next from './components/NextBut.js'

const App = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <Header count={count} />

      <Products handleCount={handleCount} />
      {/* <Next handlePlusClick={handlePlusClick} /> */}
      <Next handlePlusClick={handleCount}/>



     
    </div>
  );
};

export default App;
