import React from 'react'
import Link from 'next/link'


function Layout({ children }) {
  return (
    <div className='w-full min-h-screen'>
      <header>
        <div className='fixed w-full z-20 text-white border-b-4 border-red-600' role='navigation'>
          <nav className='md:flex justify-between items-center mx-auto lg:px-20 md:px-10 px-5 bg-gray-600'>
            <div className='flex justify-between space-x-3 py-4'>
              <Link href='/' className='mx-auto'><span className="text-2xl hover:text-red-300">Bilgi Bilişim Bilgisayar</span></Link>
            </div>
            <div className='flex justify-between py-3 lg:space-x-10 space-x-3'>
              <Link href='/' className='hover:text-red-200'>Ana sayfa</Link>
              <Link href='/about' className='hover:text-red-200'>Hakkımızda</Link>
              <Link href='/projects' className='hover:text-red-200'>Projelerimiz</Link>
              <Link href='/contact' className='hover:text-red-200'>İletişim</Link>
            </div>
          </nav>
        </div>
      </header>

      {children}
    </div>
  )
}

export default Layout