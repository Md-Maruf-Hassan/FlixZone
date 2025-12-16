import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API = 'http://localhost:5000'
const AuthContext = createContext()

export function useAuth(){ return useContext(AuthContext) }

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('fz_user')) || null } catch { return null }
  })
  const navigate = useNavigate()

  useEffect(()=>{ localStorage.setItem('fz_user', JSON.stringify(user)) }, [user])

  async function signup(email, password){
    const res = await fetch(`${API}/users?email=${encodeURIComponent(email)}`)
    const list = await res.json()
    if (list.length) throw new Error('Email already exists')
    const create = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    })
    const data = await create.json()
    setUser({ id: data.id, email: data.email })
    return data
  }

  async function login(email, password){
    const res = await fetch(`${API}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
    const list = await res.json()
    if (!list.length) throw new Error('Invalid credentials')
    const u = list[0]
    setUser({ id: u.id, email: u.email })
    return u
  }

  function logout(){ setUser(null); navigate('/') }

  return <AuthContext.Provider value={{ user, login, logout, signup }}>{children}</AuthContext.Provider>
}
