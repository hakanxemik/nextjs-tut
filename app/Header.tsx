import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <header className="p-5 bg-blue-500">
        <Link className="bg-white text-blue-500 hover:bg-slate-300 py-2 px-4 rounded-md font-bold" href="/">Home</Link>
        <Link className="ml-4 bg-white text-blue-500 hover:bg-slate-300 py-2 px-4 rounded-md font-bold" href="/todos">Todos</Link>
        <Link className="ml-4 bg-white text-blue-500 hover:bg-slate-300 py-2 px-4 rounded-md font-bold" href="/search">Search</Link>
        <Link className="ml-4 bg-white text-blue-500 hover:bg-slate-300 py-2 px-4 rounded-md font-bold" href="/admin">Developer</Link>
    </header>
  )
}

export default Header