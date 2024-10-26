import React, { useState,useEffect,useRef } from 'react'

const Hooks = () => {
    const inputRef = useRef()
    // const [counter,setCounter] = useState(0)
    // const [decrease,setDecrease] = useState(0)
    // useEffect( ()=>{
    //     console.log("Hello");
    // },[counter,decrease])
    const getInfoFromInput = ()=>{
        console.log(inputRef.current.value);
        inputRef.current.disabled=true
         
        if(inputRef.current.value.toLowerCase()==="gamarjoba"){
            inputRef.current.placeholder="Salami, rogor xar?"
        }
        inputRef.current.value = ""
    }
  return (
    <div>
        Hooks
        {/* <p>Decrease: {decrease}</p> */}
        {/* <p>{counter}</p> */}
      {/* <button onClick={()=>setDecrease(decrease-1)}>Decrease</button> */}
      {/* <button onClick={()=>setCounter(counter+1)}>Click</button> */}
        <input type="text" ref={inputRef}  />
        <button onClick={getInfoFromInput}>Get Info</button>
    </div>
  )
}

export default Hooks