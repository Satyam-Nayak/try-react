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
    }, []); // Empty dependency array ensures fetchData is called only once on mount

    console.log(item);

    return (
        <div className="items">
            <h1>Items List</h1>
            {/* Render items here */}
        </div>
    );
}

export default Items1;
