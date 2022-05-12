import React from "react";
import Login from "./Pages/Login";
import MainContent from "./Pages/MainContent";
import { Routes, Route } from "react-router-dom";



function App() {


  return (
 
  <Routes>
      <Route path="login "  element={<Login />} />
      <Route path="/" exact element={<MainContent />} />

  </Routes>
 
  )
}

export default App
