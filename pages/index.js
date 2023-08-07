import { useEffect, useState } from 'react'
import Layout from '../components/Layout'


export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('scroll', () => {
      const title = document.getElementById('title')
      const titleExp = document.getElementById('title-explanation')

      if (window.innerWidth >= 1000) {
        if (window.scrollY >= 40) {
          title.classList.add('text-6xl')
          title.classList.remove('text-7xl')
          titleExp.classList.add('text-2xl')
          titleExp.classList.remove('text-3xl')
        } else {
          title.classList.add('text-7xl')
          title.classList.remove('text-6xl')
          titleExp.classList.add('text-3xl')
          titleExp.classList.remove('text-2xl')
        }
      } else if (window.innerWidth >= 700) {
        if (window.scrollY >= 40) {
          title.classList.add('text-5xl')
          title.classList.remove('text-6xl')
          titleExp.classList.add('text-xl')
          titleExp.classList.remove('text-2xl')
        } else {
          title.classList.add('text-6xl')
          title.classList.remove('text-5xl')
          titleExp.classList.add('text-2xl')
          titleExp.classList.remove('text-xl')
        }
      } else if (window.innerWidth >= 500) {
        if (window.scrollY >= 40) {
          title.classList.add('text-3xl')
          title.classList.remove('text-4xl')
          titleExp.classList.add('text-lg')
          titleExp.classList.remove('text-xl')
        } else {
          title.classList.add('text-4xl')
          title.classList.remove('text-3xl')
          titleExp.classList.add('text-xl')
          titleExp.classList.remove('text-lg')
        }
      } else {
        if (window.scrollY >= 40) {
          title.classList.add('text-2xl')
          title.classList.remove('text-3xl')
          titleExp.classList.add('text-base')
          titleExp.classList.remove('text-lg')
        } else {
          title.classList.add('text-3xl')
          title.classList.remove('text-2xl')
          titleExp.classList.add('text-lg')
          titleExp.classList.remove('text-base')
        }
      }
    })
  }, [])

  const textSizeSetter = () => {
    if (windowWidth >= 1000) return 'text-7xl'
    else if (windowWidth >= 700) return 'text-6xl'
    else if (windowWidth >= 500) return 'text-4xl'
    else return 'text-3xl'
  }

  const explanationSizeSetter = () => {
    if(windowWidth >= 1000) return 'text-3xl'
    else if(windowWidth >= 700) return 'text-2xl'
    else if(windowWidth >= 500) return 'text-xl'
    else return 'text-lg'
  }

  return (
    <Layout>
      <div className='fixed w-full h-5/6 bg-rose-500 pt-48 text-center'>
        <h1 id='title' className={`${textSizeSetter()} font-bold text-gray-100`}>Bilgi Bilişim Bilgisayar</h1>
        <h3 id='title-explanation' className={`${explanationSizeSetter()} text-3xl text-gray-200 mt-5`}>-Kaliteli ve güvenilir hizmet-</h3>
      </div>

      <main className="shadow absolute top-[60%] w-full h-full bg-gray-200 py-32 rounded-3xl overflow-hidden z-10">
        <section>
          kamera sistemleri
        </section>
      </main>
    </Layout>
  )
}