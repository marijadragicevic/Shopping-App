import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// u index pa odatle da se uveze
import Navbar from './Components/Navbar/Navbar';
import ContextProvider from './Context/Context';
import Favorites from './Pages/Favorites';
import History from './Pages/History';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';

import './Style/index.scss';

function App() {
  return (
    <div className="App">

      <Router>

        <ContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:title' element={<RecipeDetails />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/history' element={<History />} />
          </Routes>

          <Navbar />
        </ContextProvider>

      </Router>

    </div>
  );
}

export default App;
