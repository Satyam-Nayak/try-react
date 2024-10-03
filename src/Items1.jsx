import { useEffect, useState } from "react";

function Items1() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await fetch('http://localhost:2626/Itmes'); // Correct the endpoint here if necessary
        let res = await data.json();
        setItem(res);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="items">
      {item.length > 0 ? (
        item.map((itm) => (
          <div key={itm.id} className="item-card">
            <h3>{itm.name}</h3>
            <img src={itm.image} alt={itm.name} style={{ width: "200px", height: "auto" }} />
            <p>Price: {itm.price}</p>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default Items1;
