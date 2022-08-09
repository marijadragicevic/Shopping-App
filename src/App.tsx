import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import './Style/index.scss';

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Navbar />

      </Router>

    </div>
  );
}

export default App;
