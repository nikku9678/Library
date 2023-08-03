import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import AddBooks from './pages/AddBooks/AddBooks'
// import Service from "./components/Services/Service";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-books" element={<AddBooks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
