import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import Link from 'next/link'
import Head from 'next/head'

function Layout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className='w-full min-h-screen'>
      <Head>
        <title>Bilgi Bilişim Bilgisayar</title>
        <meta name="description" content="Bilgi Bilişim Bilgisayar" />
        <meta charSet='UTF-8' />
        <meta name='keywords' content='Bilgi Bilişim Bilgisayar, elektronik, donanım, kamera sistemleri, teknik servis' />
      </Head>
      {loading ? <div className='flex justify-center items-center h-screen bg-gray-300'><HashLoader loading={loading} color='red' size={50} aria-label="Loading Spinner" data-testid="loader" /></div> :
        <>
          <header>
            <div className='fixed w-full z-20 text-white border-b-4 border-red-600' role='navigation'>
              <nav className='md:flex justify-between items-center mx-auto lg:px-20 md:px-10 px-5 bg-gray-600'>
                <div className='flex justify-between space-x-3 py-4'>
                  <Link href='/' className='mx-auto'><span className="text-4xl font-bold font-serif hover:text-red-300 italic">B<span className='text-red-500'>B</span>B</span></Link>
                </div>
                <div className='flex md:justify-between justify-end py-3 lg:space-x-10 space-x-3'>
                  <Link href='/' className='hover:text-red-200'>Ana sayfa</Link>
                  <Link href='/iletisim' className='hover:text-red-200'>İletişim</Link>
                </div>
              </nav>
            </div>
          </header>
          <div className='md:h-[4.2rem] h-[7.2rem] bg-blue-600'></div>
          {children}
        </>
      }
    </div>
  )
}

export default Layout