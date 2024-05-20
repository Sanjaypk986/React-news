import React from 'react'

function Header() {
  return (
    <div className='container mx-auto flex justify-between py-6 px-4 border-b-2'>
      <span className='text-xl font-bold'>HeadLines</span>
      <nav>
        <ul className='flex gap-10'>
          <li className='hidden sm:flex'>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Exclusive</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Header
