import React from 'react'
import { AlignJustify, LogOut } from 'lucide-react'

const Header = ({ setOpen }) => {
  return <>
    <header
      className='flex item-center justify-between
     px-4 py-3 bg-background border-b-3'
    >
      <button
        className='lg:hidden sm:block bg-black
       text-white p-2 rounded-md
        hover:bg-gray-800 transition-colors duration-200'
        onClick={() => setOpen(true)}
      >
        <AlignJustify />
        <span
          className='sr-only'>
          toggle menu
        </span>
      </button>
      <div
        className='flex flex-1 justify-end'
      >
        <button
          className='inline-flex gap-2 justify-end
           bg-black text-white px-4 py-2 rounded-md
            hover:bg-gray-800 transition-colors
             duration-200 shadow'
        >
          <LogOut />
          Log out
        </button>
      </div>
    </header>
  </>
}

export default Header