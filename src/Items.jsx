import { useState } from "react";

function Items(){

    let [item,setItem] = useState([]);

    async function fetchData(){
        let data = await fetch('http://localhost:2626/Itmes')
        let res = await data.json()
        setItem(res)
        // console.log(res);
    }
    fetchData()
    console.log(item);

    return(
        <div className="items">
            <h1>hgt</h1>
        </div>
    )
}
export default Items;