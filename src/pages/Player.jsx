import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import movies from '../data/movies'

export default function Player(){
  const { id } = useParams()
  const movie = movies.find(m=>m.id===id)
  if(!movie) return <div className="p-8">Not found.</div>
  const opts = { playerVars: { autoplay: 1, rel: 0 } }
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl mb-2">{movie.title}</h2>
        {movie.video ? (
          <div style={{aspectRatio: '16/9'}} className="rounded overflow-hidden">
            <YouTube videoId={movie.video} opts={opts} />
          </div>
        ) : (
          <div className="p-6 bg-gray-800 rounded">Trailer not available for this title.</div>
        )}
        <p className="mt-4 text-gray-300">{movie.description}</p>
      </div>
    </div>
  )
}
