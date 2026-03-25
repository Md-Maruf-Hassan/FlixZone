import React, { useState } from 'react'
import movies from '../data/movies'
import MovieModal from '../components/MovieModal'
import MovieCard from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'

export default function Browse(){
  const [open, setOpen] = useState(null)
  const [params,setParams]= useSearchParams()
  const genre = params.get('genre')
  const filtered = genre ? movies.filter(m=>m.genre===genre) : movies

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl mb-4">Browse {genre? `— ${genre}` : ''}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map(m=>(
          <div key={m.id}><MovieCard movie={m} onOpen={(mm)=>setOpen(mm)} /></div>
        ))}
      </div>
      {open && <MovieModal movie={open} onClose={()=>setOpen(null)} />}
    </div>
  )
}
