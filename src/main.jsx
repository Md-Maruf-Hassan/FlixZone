import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

function Root(){
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 2200)
    return ()=> clearTimeout(t)
  },[])
  return (
    <>
      <App />
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
