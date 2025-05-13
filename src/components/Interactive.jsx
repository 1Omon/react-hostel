import React, { useEffect, useState } from "react";

const Interactive = () => {
  const [heading, setHeading] = useState("First Heading");
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
      if (heading === "This is the second heading!"){
          alert("Hello, you made it!")
      }
  }, [heading])

  const handleClick = () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        setHeading("This is the second heading!");
        setNumber(100);
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-20">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="text-2xl font-medium my-4">{number}</p>
      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-green-500 p-4 rounded-md my-6 "
      >
        {isLoading === true ? "Loading..." : "Click to change"}
      </button>
    </div>
  );
};

export default Interactive;