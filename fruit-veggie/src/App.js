import React, { useContext } from "react";
import { FruitContext } from "./Store";
import Vegetable from './Vegetable';

const App = () => {
  const [fruit, setFruit] = useContext(FruitContext);
  return (
    <div>
      <h1>React Hooks in Context</h1>
      <h2>Today's fruit is {fruit}</h2>
      <Vegetable />
    </div>
  );
};

export default App;
