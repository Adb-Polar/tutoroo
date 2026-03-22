'use client'
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count +  1);
  };
  return (
    <div>
      <button className="p-1 bg-blue-500" onClick={add}>{count}</button>
    </div>
  );
}
