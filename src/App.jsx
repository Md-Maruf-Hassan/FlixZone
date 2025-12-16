import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Browse from './pages/Browse'
import MyList from './pages/MyList'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Player from './pages/Player'
import './index.css'

export default function App(){ 
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/browse' element={<Browse />} />
              <Route path='/my-list' element={<MyList />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/account' element={<Account />} />
              <Route path='/player/:id' element={<Player />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}
