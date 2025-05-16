import React, { useEffect, useState } from "react";
import ContactForm from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Interactive from "./components/Interactive";

export default function App() {
  // const [fetchedData, setFetchedData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch("https://dummyjson.com/carts");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();

  //       setFetchedData(data.carts);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/contact"} element={<ContactForm />} />
          <Route path={"/"} element={<SignUp />} />
          <Route path={"/interactive"} element={<Interactive />} />

        </Routes>
      </Router>
    </>
  );
}
