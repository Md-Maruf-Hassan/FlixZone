import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function MyList(){
  const { user } = useAuth()
  const [list, setList] = useState([])

  useEffect(()=>{
    if(!user) return
    fetch(`http://localhost:5000/watchlist?userId=${user.id}`)
      .then(r=>r.json()).then(setList).catch(()=>{})
  }, [user])

  if(!user) return <div className="p-8">Please sign in to see your list.</div>
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl mb-4">My List</h2>
      {list.length===0 ? <p>No items in your list.</p> : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {list.map(i=> <div key={i.id} className="bg-gray-800 p-3 rounded">{i.title}</div>)}
        </div>
      )}
    </div>
  )
}
