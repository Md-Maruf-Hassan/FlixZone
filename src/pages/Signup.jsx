import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const handleLogin = () =>{
    nav("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <form  className="max-w-md w-full bg-gray-900 p-6 rounded">
        <h3 className="text-xl mb-4">Create account</h3>
        
        <label className="block mb-2">Email<input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-800" type="email" required /></label>
        <label className="block mb-4">Password<input value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 rounded bg-gray-800" type="password" required /></label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-900 rounded">Create</button>
          <button className="px-4 py-2 text-blue-400 rounded hover:bg-blue-500 hover:text-amber-50 " onClick={handleLogin}>Already have an account?</button>
        </div>
      </form>
    </div>
  )
}
