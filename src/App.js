import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Following from "./components/Following";
import Notification from "./components/Ntf";
import { FilterContext } from './context/filterContext/FilterContext';





function App() {
  const [searchValue, setsearchValue] = useState('');

  return (
    <FilterContext.Provider value={{ searchValue, setsearchValue }} >

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Router>
    </FilterContext.Provider>

  );
}

export default App;
