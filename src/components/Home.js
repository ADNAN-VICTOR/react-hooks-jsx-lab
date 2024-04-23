import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
  <div id="home">Home
  <h1>{name} is a Web Developer from {city}"</h1>
  </div>
  )
};

export default Home;