import { useState } from 'react'

 const CashCounter = () => {
    let [num,setnum] = useState(0);
    console.log(num);
    function count(){
        setnum(num+1);
        console.log(num);
    }
  return (
    <div className='ccount'>
        <h1>The total cash : {num}</h1>
        <button onClick={count}>Count</button>
    </div>
  )
}
export default CashCounter
