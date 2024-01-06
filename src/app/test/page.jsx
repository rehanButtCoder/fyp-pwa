'use client'
import { decrement, increment } from "@/redux/slices/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const Test = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    // console.log(count);
  
  return (
    <div>
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
    <span>{count}</span>
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>
  </div>
  )
}

export default Test
