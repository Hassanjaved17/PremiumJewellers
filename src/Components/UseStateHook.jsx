
import React, { useState, useEffect } from 'react'
const UseStateHook = () => {
  const [count, SetCount] = useState(0);
  const [toggle, SetToggle] = useState(false);



  useEffect(() => {
    console.log("Use Effect Hook")


  }, [toggle])
  return (
    <>
      My Count Value is {count}
      <br />
      <button onClick={() => SetCount(count + 1)} Add></button>
      <br />
      <button onClick={() => SetToggle(toggle)} Toggle></button>
    </>
  )
}

export default UseStateHook


