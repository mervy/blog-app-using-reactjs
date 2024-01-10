import React from "react";
import './App.css';

import Posts from './components/Posts.js'
import Navbar from "./components/BlogNav.js"

function App() {
  return (
    <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
      <Navbar />
      <Posts />
    </div>
  )
}

export default App;
