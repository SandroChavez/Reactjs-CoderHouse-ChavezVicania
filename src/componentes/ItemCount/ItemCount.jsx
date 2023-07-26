import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {

  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      <div className="item-count--buttons">
        <button onClick={() => handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={() => handleSum()}>+</button>
      </div>
      <div className="item-count--add">
        <button  disabled={!stock} onClick={() => onAdd(count)}>
          Agregar a carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount