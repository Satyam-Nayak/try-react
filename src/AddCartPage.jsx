import React from 'react'
import WishList from './WishList';
export default function AddCartPage({d2}) {
    console.log(d2);
    
  return (
    <div>
      <h3>AddCart: {d2}</h3>
      <WishList d3 ={d2}/>
    </div>
  )
}
