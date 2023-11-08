import React from 'react'

function Navbar() {
  return (

    <>
        <nav className='w-[73%] h-16 bg-[#f1f3f4] fixed right-16 top-2 z-[-1] rounded-lg flex justify-end items-center pr-3'>
            <div className='w-[35px] h-[35px] bg-slate-800 rounded-full text-white text-xl flex justify-center items-center'>
            <i className="fa-solid fa-user"></i>
            </div>
        </nav>
    </>
  )
}

export default Navbar
