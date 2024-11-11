import React, {useState} from 'react'
import NavbarPage from './NavbarPage'

export default function HomePage() {
    let[data,setData]=useState(0)

    function change(){
        setData(data+1)
    }
  return (
    <div>
      <button onClick={change}>add</button>
      <h2>HomePage:{data}</h2>
      <NavbarPage d1 ={data}/>
    </div>
  )
}
