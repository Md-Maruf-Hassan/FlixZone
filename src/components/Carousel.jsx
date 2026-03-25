import React from 'react'
import MovieCard from './MovieCard'

export default function Carousel({ items, onOpen }){
  return (
    <div className="overflow-x-auto whitespace-nowrap py-2 movie-row">
      {items.map(i=>(
        <div key={i.id} className="inline-block mr-3 w-44 align-top">
          <MovieCard movie={i} onOpen={onOpen} />
        </div>
      ))}
    </div>
  )
}
