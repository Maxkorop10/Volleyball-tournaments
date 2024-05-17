import { useState } from 'react'
import './styles/App.css'
import Teams from './pages/Teams'
import Edit_team from './components/Edit_team'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Players from './pages/Players';
import Edit_player from './components/Edit_player';
import Tournaments from './pages/Tournaments';
import Edit_tournament from './components/Edit_tournament';
import Matches from './pages/Matches';
import Edit_Match from './components/Edit_Match';
import Stats from './pages/Stats';
import Edit_stat from './components/Edit_stat';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <header className="bg-gray-800 fixed top-0 left-0 w-full py-2 px-4 flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">
            Teams
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Teams
            </Link>
            <Link to="/players" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Players
            </Link>
            <Link to="/tournaments" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Tournaments
            </Link>
            <Link to="/matches" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Matches
            </Link>
            <Link to="/stats" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Stats
            </Link>
          </nav>
          <button className="md:hidden focus:outline-none text-white" aria-label="Menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </header>

        <Routes>
          <Route exact path='/' element={<Teams/>}/>
          <Route path='/edit_team/:id' element={<Edit_team/>}/>
          <Route exact path='/players' element={<Players/>}/>
          <Route path='/edit_player/:id' element={<Edit_player/>}/>
          <Route exact path='/tournaments' element={<Tournaments/>}/>
          <Route path='/edit_tournament/:id' element={<Edit_tournament/>}/>
          <Route exact path='/matches' element={<Matches/>}/>
          <Route path='/edit_match/:id' element={<Edit_Match/>}/>
          <Route exact path='/stats' element={<Stats/>}/>
          <Route path='/edit_stats/:id' element={<Edit_stat/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
