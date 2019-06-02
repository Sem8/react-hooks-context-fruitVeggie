import React, { useContext } from 'react';
import { VegetableContext } from './Store';

const Vegetable = () => {
    const [vegetable, setVegetable] = useContext(VegetableContext);
    return (
        <div>{vegetable}</div>
    )
};

export default Vegetable;