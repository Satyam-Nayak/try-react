import React  from "react";
// this id for how to connect the script with the reactjsx file
let Incre = () =>{
    let count = 22;
    console.log(count);
    function increment(){
        count = count + 1;
        console.log(count);
    }
    function view(bike){
        console.log("the bike name"+ bike)
    }
    return(
        <div className="incre1">
            <h1>count number : {count}</h1>
            <button onClick={()=>{view("NS200")}}>bike</button>
            <button onClick={increment}>Increase</button>
            <br />
        </div>
    )
}
export default Incre