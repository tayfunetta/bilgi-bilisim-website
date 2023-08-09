import { useEffect, useState } from 'react'
import Image from 'next/image';
import Layout from '../components/Layout'
import { PiDesktopTowerBold } from 'react-icons/pi';
import { BiServer, BiCctv } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SlWrench } from 'react-icons/sl';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    document.addEventListener('scroll', () => {
      const title = document.getElementById('title')
      const titleExp = document.getElementById('title-explanation')

      if (title) {
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
      }

      if (window.scrollY >= 100) animationFunction()
    })
  }, [])

  const textSizeSetter = () => {
    if (windowWidth >= 1000) return 'text-7xl'
    else if (windowWidth >= 700) return 'text-6xl'
    else if (windowWidth >= 500) return 'text-4xl'
    else return 'text-3xl'
  }

  const explanationSizeSetter = () => {
    if (windowWidth >= 1000) return 'text-3xl'
    else if (windowWidth >= 700) return 'text-2xl'
    else if (windowWidth >= 500) return 'text-xl'
    else return 'text-lg'
  }

  const animationFunction = () => {
    const serviceCards = document.querySelectorAll('.service-card')

    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('opacity-0')
        card.classList.add('opacity-100')
      }, 200 * index)
    })
  }

  return (
    <Layout>
      <div className='fixed w-full h-5/6 bg-rose-500 pt-32 text-center'>
        <h1 id='title' className={`${textSizeSetter()} font-bold text-gray-100`}>Bilgi Bilişim Bilgisayar</h1>
        <h3 id='title-explanation' className={`${explanationSizeSetter()} text-3xl opacity-40 mt-5`}>-Kaliteli ve güvenilir hizmet-</h3>
      </div>

      <main className="shadow absolute top-[60%] bg-gray-200 py-32 rounded-3xl z-10">
        <section id='services'>
          <h2 className='text-center text-4xl font-semibold text-red-600 underline underline-offset-4'>Hizmetlerimiz</h2>
          <div className='flex justify-evenly items-center flex-wrap bg-red-200 w-11/12 mx-auto mt-12 py-10 rounded-3xl'>
            <div className='service-card opacity-0'>
              <div className='service-card-text'><PiDesktopTowerBold /><span>Donanım Satışı</span></div>
              <Image src="/images/img1.png" className='mx-auto' height="300" width="300" alt='server image' />
            </div>
            <div className='service-card opacity-0'>
              <div className='service-card-text'><BiServer /><span>Network Çözümleri</span></div>
              <Image src="/images/img2.jpg" className='mx-auto rounded-3xl' height="300" width="300" alt='switch image' />
            </div>
            <div className='service-card opacity-0'>
              <div className='service-card-text'>
                <style>{`svg path {stroke: rgb(220 38 38)}`}</style>
                <GrHostMaintenance /><span>Bakım Anlaşmaları</span>
              </div>
              <Image src="/images/img3.png" className='mx-auto' height={200} width={200} alt='shaking hands image' />
            </div>
            <div className='service-card opacity-0'>
              <div className='service-card-text'><AiOutlineInfoCircle /><span>Danışmanlık Hizmetleri</span></div>
              <Image src="/images/img4.jpeg" className='mx-auto rounded-3xl' height={300} width={300} alt='consultancy image' />
            </div>
            <div className='service-card opacity-0'>
              <div className='service-card-text'><SlWrench /><span>Teknik Servis</span></div>
              <Image src="/images/img5.png" className='mx-auto' height={300} width={300} alt='wrench and screwdriver image' />
            </div>
            <div className='service-card opacity-0'>
              <div className='service-card-text'><BiCctv /><span>Güvenlik Sistemleri</span></div>
              <Image src="/images/img6.png" className='mx-auto' height={300} width={300} alt='cctv image' />
            </div>
          </div>
        </section>

        <section id='choose'>
          <div className='lg:w-3/4 w-11/12 mx-auto px-10 py-10 mt-10 bg-red-500 rounded-3xl'>
            <h2 className='mb-5 text-center text-4xl font-semibold text-red-100 underline underline-offset-4'>Neden bizi seçmelisiniz?</h2>
            <p className='text-xl leading-8 text-red-100'><span className='text-white text-2xl font-semibold'>Bilgi Bilişim Bilgisayar</span> olarak 24 yıllık deneyimimizle ağ ve güvenlik sistemleri, bilgisayar donanımı ve elektrik altyapı çözümleri konularında müşterilerimize en iyi hizmeti sunmaktayız. Uzman kadromuz ve son teknoloji ürünleri ile işletmenizin bilişim ve elektrik altyapısı ihtiyaçlarına etkin çözümler üretiyoruz. Kurumsal firma ve kamu kurumlarının güvenilir teknoloji ve elektrik altyapısı ortağı olma vizyonumuzla faaliyetlerimizi sürdürüyor, müşterilerimizin memnuniyetini her zaman ön planda tutuyoruz. Uzun yıllara dayanan bilgi birikimi ve deneyimimizle bilişim ve elektrik altyapısı konularında siz değerli müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}