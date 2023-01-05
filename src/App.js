import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Following from "./components/Following";
import Notification from "./components/Ntf";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/following" element={<Following />} />
        <Route path="/notifications" element={<Notification/>}/>
      </Routes>
    </Router>
  );
}

export default App;
