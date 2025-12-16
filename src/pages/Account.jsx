import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Account(){
  const { user } = useAuth()
  if(!user) return <div className="p-8">Not signed in.</div>
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <h2 className="text-2xl mb-4">Account</h2>
      <p>Email: {user.email}</p>
      <p className="mt-4 text-sm text-gray-400">Manage plan, payment methods, and accessibility settings (demo).</p>
    </div>
  )
}
