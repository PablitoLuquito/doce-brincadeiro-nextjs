import { useState } from "react";

const ProductItem = (props) => {
  const [counter, setCounter] = useState(0);

  function decreaseCounterHandle() {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }

  function increaseCounterHandle() {
    setCounter(counter + 1);
  }

  let amount = counter;

  return (
    <li>
      <div className="overflow-hidden border rounded-md shad">
        <div className="flex items-center justify-center overflow-hidden h-72 bg-slate-200">
          <img src={props.image} alt={props.title} className="w-auto h-full" />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <span className="font-semibold">R$ {props.price}</span>
          <h3>{props.title}</h3>
          <span>{props.desc}</span>
        </div>
        <div className="w-full pb-2 pr-3 font-bold text-right">
          <button
            type="button"
            onClick={decreaseCounterHandle}
            className="w-5 mr-2 text-xl text-center"
          >{`-`}</button>
          <input
            type="text"
            value={counter}
            readOnly
            className="w-5 text-center outline-none cursor-default"
          />
          <button
            type="button"
            onClick={increaseCounterHandle}
            className="w-5 ml-2 text-xl text-center"
          >{`+`}</button>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
