import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import MovieModal from '../components/MovieModal'
import movies from '../data/movies'

const GENRES = ['Action','Drama','Horror','Comedy','Romance','Sci-Fi','Animation']

export default function Home(){
  const [open, setOpen] = useState(null)

  const onCardClick = (m)=> setOpen(m)
  const onAdd = async (m)=>{ alert('Added to your list') }

  return (
    <div className="bg-linear-to-b from-gray-900 to-black min-h-screen text-white">
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome to FlixZone</h1>
          {/* <p className="mt-2 text-gray-300 max-w-xl">A demo streaming frontend — instant previews, trailers via YouTube, and a smooth, modern UI.</p> */}
          {/* <div className="mt-4 flex gap-3">
            <button onClick={()=>onCardClick(movies[0])} className="px-4 py-2 bg-brand rounded">Play</button>
            <button onClick={()=>setOpen(movies[0])} className="px-4 py-2 border rounded">More</button>
          </div> */}
        </div>
        {/* <div className="hidden md:block"><img src={movies[0].poster} alt='' className="rounded shadow-lg"/></div> */}
      </section>

      <div className="space-y-8 px-4">
        {GENRES.map(genre=>{
          const row = movies.filter(m=>m.genre===genre)
          return (
            <section key={genre} className="max-w-7xl mx-auto">
              <h2 className="text-2xl mb-4">{genre} Picks</h2>
              <Carousel items={row} onOpen={(m)=>onCardClick(m)} />
            </section>
          )
        })}
      </div>

      {open && <MovieModal movie={open} onClose={()=>setOpen(null)} />}
    </div>
  )
}
