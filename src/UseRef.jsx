import React from "react";
import { useRef } from "react";

export default function UseRef() {
    let data = useRef();
    let phone = useRef();
    function print(){
        console.log(data.current.value);
        console.log(phone.current.value);
    }
  return (
    <div className="UseRef1">
        <label htmlFor="">Name:</label>
        <input type="text" ref={data} placeholder="Enter" />
        <label htmlFor="">Phone:</label>
        <input type="text" ref={phone} placeholder="Enter"/>
        <button onClick={print}>Submit:</button>      
    </div>
  )
}
