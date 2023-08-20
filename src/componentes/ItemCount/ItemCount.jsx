import { useState } from "react";

import { useCartContext } from '../../contextos/Cart.context'

import "./ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {

  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };

  const {addProduct} = useCartContext()

  return (
    <div className="item-count">
      <div className="item-count--buttons">
        <button onClick={() => handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={() => handleSum()}>+</button>
      </div>
      <div className="item-count--add">
        <button  disabled={!stock} onClick={() => {
              onAdd(count);
              setCount(1);
            }}>
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount