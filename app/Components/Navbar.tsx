import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <h2>Danish</h2>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar