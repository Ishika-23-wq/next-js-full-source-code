"use client"

import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0);
    const handleIncrement =()=>{
        // count=count+1
        setCount(count+1)
        console.log(count)
    }
  return (
<div>
    <h6>Count: {count}</h6>
    <button onClick={handleIncrement}>+</button>
  </div>
  )
}