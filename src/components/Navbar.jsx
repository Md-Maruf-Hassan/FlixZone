import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const GENRES = ['Action','Drama','Horror','Comedy','Romance','Sci-Fi','Animation']

export default function Navbar(){
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [showGenres, setShowGenres] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`sticky top-0 z-50 ${scrolled? 'header-scroll':''}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} className="logo-anim text-2xl font-bold text-white">
            <Link to='/'>FlixZone</Link>
          </motion.div>
          <nav className="hidden md:flex items-center gap-4">
            <Link to='/browse' className="text-sm hover:underline">Movies</Link>
            <div className="relative group">
              <button  className="text-sm hover:underline">Genre ▾</button>
              
                <div className="absolute left-0 invisible bg-gray-900 rounded shadow p-2  group-hover:visible" >
                  {GENRES.map(g=> <div key={g}><Link to={`/browse?genre=${g}`} className="block px-3 py-1 hover:bg-gray-800 rounded">{g}</Link></div>)}
                </div>
              
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <input placeholder="Search" className="px-3 py-1 rounded bg-gray-800 text-sm" />
          </div>

          
            <div className="hidden sm:flex gap-2">
              <Link to='/login' className="px-3 py-1  text-sm">Sign In</Link>
              <Link to='/signup' className="px-3 py-1 rounded bg-brand text-sm">Sign Up</Link>
            </div>

          <button className="md:hidden px-2 py-1" onClick={()=>setOpenMenu(s=>!s)} aria-label="menu">☰</button>
        </div>
      </div>
      {openMenu && (
        <div className="absolute md:hidden bg-gray-800 p-4 mobile-drawer w-52 mask-l-from-25 right-0 ">
          <nav className="flex flex-col items-end gap-2">
            <Link to='/' className="py-2">Home</Link>
            <Link to='/browse' className="py-2">Browse</Link>
            {GENRES.map(g=> <Link key={g} to={`/browse?genre=${g}`} className="py-2">{g}</Link>)}
            
              <>
                <Link to='/login' className="py-2">Sign In</Link>
                <Link to='/signup' className="py-2">Sign Up</Link>
              </>
          </nav>
        </div>
      )}
    </header>
  )
}
