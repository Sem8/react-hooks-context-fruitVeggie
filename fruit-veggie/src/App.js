import React, { useContext } from "react";
import { FruitContext, VegetableContext } from "./Store";
import Vegetable from './Vegetable';


const App = () => {
  const [fruit] = useContext(FruitContext);
  const [vegetable] = useContext(VegetableContext);
  return (
    <div>
      <h1>React Hooks in Context</h1>
      <h2>Today's fruit is {fruit}</h2>
      <Vegetable />
      <h3>Veggies</h3>
      {vegetable}
    </div>
  );
};

export default App;
