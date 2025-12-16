import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  const submit = async (e)=>{
    e.preventDefault()
    try{
      await login(email, password)
      const pending = sessionStorage.getItem('pending')
      if(pending){
        const p = JSON.parse(pending); sessionStorage.removeItem('pending')
        if(p.type==='play') return nav(`/player/${p.movieId}`)
        if(p.type==='add') return nav('/my-list')
      }
      nav('/')
    }catch(err){ setErr(err.message) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <form  className="max-w-md w-full bg-gray-900 p-6 rounded">
        <h3 className="text-xl mb-4">Sign In</h3>
        {err && <div className="mb-2 text-red-400">{err}</div>}
        <label className="block mb-2">Email<input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-800" type="email" required /></label>
        <label className="block mb-4">Password<input value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 rounded bg-gray-800" type="password" required /></label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-brand border rounded">Sign In</button>
          <a className="px-4 py-2 border rounded" href="/signup">Create account</a>
        </div>
      </form>
    </div>
  )
}
