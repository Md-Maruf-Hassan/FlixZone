import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'

export default function MovieModal({ movie, onClose }){
  const playerRef = useRef(null)
  const opts = { height: '390', width: '640', playerVars: { autoplay: 1, controls: 1, rel: 0 } }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{y:20, opacity:0}} className="bg-gray-900 text-white rounded max-w-3xl w-full overflow-auto">
        <div className="flex justify-between items-start p-4">
          <div>
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p className="text-sm text-gray-400">{movie.year} • {movie.duration} • {movie.rating} • {movie.genre}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-3 py-1">Close</button>
          </div>
        </div>
        <div className="p-4">
          {movie.trailer ? (
            <div className="w-full" style={{aspectRatio: '16/9'}}>
              <YouTube videoId={movie.trailer} opts={opts} onReady={(e)=>{ playerRef.current = e.target }} />
            </div>
          ) : (
            <div className="p-6 bg-gray-800 rounded">Trailer not available for this title.</div>
          )}
          <div className="mt-4 text-gray-300">{movie.description}</div>
        </div>
      </motion.div>
    </div>
  )
}
