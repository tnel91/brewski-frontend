import './App.css'
import Nav from './components/Navbar'
import { useState } from 'react'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  }

  return (
    <div className="App">
      <Nav 
      authenticated={authenticated}
      user={user}
      handleLogout={handleLogout}
      />
      <h1>Brewski</h1>
    </div>
  )
}

export default App
