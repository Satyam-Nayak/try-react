import React from 'react'
import AddCartPage from './AddCartPage'

export default function NavbarPage({d1}) {
    console.log(d1);
    
  return (
    <div>
      <h3>NaveBAr: {d1}</h3>
      <AddCartPage d2={d1} />
    </div>
  )
}
