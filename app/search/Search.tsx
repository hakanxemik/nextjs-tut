'use client'

import React, {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation'

function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSearch}>
        <input 
            type="text" 
            value={search} 
            placeholder="Search Todo..." 
            onChange={(e) => {setSearch(e.target.value)}}>
        </input>
        <button type="submit" className='ml-5 bg-blue-500 text-white px-5 py-2 rounded-lg'>Search</button>
    </form>
  )
}

export default Search