import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="cantidad">
      <div>
        <button className="btn-icrementar" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn-decrementar" onClick={decrement}>
          -
        </button>
      </div>
      <button className="botones" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};
