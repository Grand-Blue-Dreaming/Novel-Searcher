import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
<<<<<<< HEAD
import { logo } from '../assets'
=======
import { logo, menu, close } from '../assets'
>>>>>>> 8319663e2782386842cec37758276da5800167d9

const Navbar = () => 
{
  const [active, setActive] = useState('')

  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-hero-pattern`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={()=>{
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Novel Searcher</p> 
        </Link>
      </div>
    </nav>
  )
}

export default Navbar