
import React, { useEffect } from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [val,setVal]=useState(0)

  const [sum,setSum]=useState(0)

  useEffect(()=>{

    async function handleSum(){

      const res=sum+parseInt(val)

      setSum(res)


    }

    handleSum()
    

  },[val])
  return (
    <div>
        {/* Do not remove the main div */}

        <h1>Sum Calculator</h1>

        <input onChange={(e)=>setVal(e.target.value)} type='number' value={val} />

        <p>Sum: {sum}</p>


    </div>
  )
}

export default App
