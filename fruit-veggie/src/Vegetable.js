import React, { useContext } from 'react';
import { VegetableContext } from './Store';

const Vegetable = () => {
    // const [vegetable, setVegetable] = useContext(VegetableContext);
    const [, setVegetable] = useContext(VegetableContext);
    return (
        <>
        {/* <div>{vegetable}</div> */}
        <button onClick={() => setVegetable('Brocolli')}>Set Vege to Broc</button>
        </>
    )
};

export default Vegetable;