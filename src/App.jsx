import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard"
import React, { useState } from "react";
import "./App.css";


const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory}/>     
      <NewsBoard category={category}/>
    </div>
  );
};

export default App
