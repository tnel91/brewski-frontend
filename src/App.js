import './App.css'
import Nav from './components/Navbar'
import { useState } from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Breweries from './pages/Breweries'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
