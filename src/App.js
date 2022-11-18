import './App.css'
import Nav from './components/Navbar'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Breweries from './pages/Breweries'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import BreweryDetails from './pages/BreweryDetails'
import Footer from './components/Footer'
import { CheckSession } from './services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home authenticated={authenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/signin"
          element={
            <Signin
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          }
        />
        <Route
          path="/breweries"
          element={<Breweries authenticated={authenticated} />}
        />
        <Route
          path="/breweries/:breweryId"
          element={<BreweryDetails user={user} authenticated={authenticated} />}
        />
        <Route
          path="/profile"
          element={<Profile user={user} authenticated={authenticated} />}
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
