<<<<<<< HEAD
import React, { useState, useEffect} from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 9b41e806283413e1ca4e426be24804e7d99e6c60

const UseStateHook = () => {
const [count ,SetCount]= useState(0);
const [toggle, SetToggle] =useState(false);



useEffect(() =>{
 console.log("Use Effect Hook")


}, [toggle])
  return (
    <>
      My Count Value is {count}
      <br/>
      <button onClick={() => SetCount(count+1)}Add></button>
      <br />
      <button onClick={() => SetToggle(toggle)}Toggle></button>
    </>
  )
}

export default UseStateHook


