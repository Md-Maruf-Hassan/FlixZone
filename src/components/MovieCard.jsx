import React from 'react'
import { motion } from 'framer-motion'

export default function MovieCard({ movie, onOpen }){
  return (
    <motion.div whileHover={{ scale: 1.04 }} className="bg-linear-to-b from-gray-800 to-gray-900 rounded overflow-hidden shadow-lg">
      <button onClick={()=>onOpen(movie)} className="block w-full text-left">
        <img src={movie.poster} alt={movie.title} className="w-full h-52 object-cover"/>
        <div className="p-3">
          <h3 className="font-semibold text-sm">{movie.title}</h3>
          <p className="text-xs text-gray-400">{movie.year} • {movie.duration}</p>
        </div>
      </button>
    </motion.div>
  )
}
