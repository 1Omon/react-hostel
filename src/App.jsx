import React, { useEffect, useState } from "react";
import CartItem from "./components/cart-item";

export default function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        setFetchedData(data.carts);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="bg-gray-200 grid grid-cols-3 gap-6">
        {fetchedData.map((data) => (
          <CartItem {...data} key={data.id} />
        ))}
      </div>
    </>
  );
}
