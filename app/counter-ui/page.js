"use client";

import {
  useState,
  useOptimistic,
  startTransition
} from "react";

import { increaseCount } from "../actions";

export default function Counter() {

  const [count, setCount] = useState(0);

  const [optimisticCount, addOptimistic] =
    useOptimistic(
      count,
      (currentCount, amount) =>
        currentCount + amount
    );

  async function increase() {

    // 1. Immediately update UI
    startTransition(() => {
      addOptimistic(1);
    });

    // 2. Call server
    await increaseCount();

    // 3. Update actual state
    setCount(count + 1);
  }

  return (
    <div>

      <h1>{optimisticCount}</h1>

      <button onClick={increase}>
        Increase
      </button>

    </div>
  );
}