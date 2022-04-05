import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <>
      <section className="max-w-4xl mx-auto">
        <p className="text-center text-2xl">{count}</p>
        <div className="flex gap-2 justify-center ">
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-sm mx-auto mt-1"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className="flex mt-2 justify-center gap-1">
          <button
            className="btn btn-ghost "
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
          <button className="btn btn-primary" onClick={resetAll}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
