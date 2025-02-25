import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from "react-router";
function Navbar() {
  return (
    // <div className="flex justify-center md:p-1 p-1 md:text-2xl bg-slate-800 text-white">
    //     <Link className="px-3 py-1 md:px-6 hover:border rounded-md" to='/'>Home</Link>
    //     <Link className="px-3 py-1 md:px-6 hover:border rounded-md" to='/about'>About</Link>
    //     <Link className="px-3 py-1 md:px-6 hover:border rounded-md" to='/contact'>Contact</Link>
    //     <Link className="px-3 py-1 md:px-6 hover:border rounded-md" to='/dashbord'>Dashborad</Link>
    // </div>

    <div className="flex justify-center md:p-1 p-1 md:text-2xl bg-slate-800 text-white">
        <NavLink className="px-3 py-1 md:px-6 hover:border rounded-md" to='/'>Home</NavLink>
        <NavLink className="px-3 py-1 md:px-6 hover:border rounded-md" to='/about'>About</NavLink>
        <NavLink className="px-3 py-1 md:px-6 hover:border rounded-md" to='/contact'>Contact</NavLink>
        <NavLink className="px-3 py-1 md:px-6 hover:border rounded-md" to='/dashbord'>Dashborad</NavLink>
    </div>
  )
}

export default Navbar