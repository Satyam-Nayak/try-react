import { useState, useEffect } from "react";

function Items1() {
    let [item, setItem] = useState([]);

    async function fetchData() {
        let data = await fetch('http://localhost:2626/Itmes');
        let res = await data.json();
        setItem(res);
    }

    useEffect(() => {
        fetchData();
    }, []); 

    console.log(item);

    return (
        <div className="items">
            <h1>Items List</h1>
            {item.map((x)=>{
                return(
                    // fragmenting and formating ?
                    <div className="sub">
                        <img src={x.image} alt="" />
                        <h2>Name: {x.name}</h2>
                        <h1>price: {x.price}</h1>
                    </div>
                )
            })}
        </div>
    );
}

export default Items1;
