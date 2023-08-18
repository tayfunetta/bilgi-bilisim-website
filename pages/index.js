import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import { PiDesktopTowerBold } from 'react-icons/pi';
import { BiServer, BiCctv } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SlWrench } from 'react-icons/sl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';

export default function Home() {
  const franchises = ['hp', 'siemens', 'ABB', 'Sew-eurodrive', 'schneider', 'sick', 'pilz', 'allen-bradley', 'dahua', 'inform', 'dell', 'lenovo', 'nexans', 'legrand', 'omron', 'digitus', 'wisetech', 'paradox', 'honeywell', 'apc', 'hcs']
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
        <h3 id='title-explanation' className={`${explanationSizeSetter()} text-3xl mt-5 opacity-40`}>-Kaliteli ve güvenilir hizmet-</h3>
      </div>

      <main className="shadow absolute top-[60%] bg-gray-200 py-32 rounded-3xl z-10">
        <section id='services'>
          <h2 className='text-center text-4xl font-semibold text-red-600 underline underline-offset-4'>Hizmetlerimiz</h2>
          <div className='flex justify-evenly items-center flex-wrap bg-gray-100 w-11/12 mx-auto mt-12 py-10 rounded-3xl'>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><PiDesktopTowerBold /><figcaption>Donanım Satışı</figcaption></div>
              <Swipe imgs={['img1.png', 'img2.jpg', 'img3.png']} classes={['', 'rounded-3xl', '']} alts={['server', 'computer case', 'printer']} dim3={[200, 200]} delay={3000} />
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><BiCctv /><figcaption>Güvenlik Sistemleri</figcaption></div>
              <Swiper effect={'flip'} slidesPerView={1} loop={true} modules={[Autoplay, EffectFlip]} autoplay={{ delay: 2000 }}>
                <SwiperSlide>
                  <Image src={`/images/img16.png`} className={`mx-auto`} width={300} height={300} alt={`bullet kamera resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img17.png`} className={`mx-auto`} width={200} height={200} alt={`eyeball kamera resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img18.png`} className={`mx-auto`} width={300} height={300} alt={`bullet kamera resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img19.png`} className={`mx-auto`} width={220} height={220} alt={`spitdome kamera resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img20.png`} className={`mx-auto relative bottom-10`} width={300} height={300} alt={`kayıt cihazı resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img21.png`} className={`mx-auto`} width={200} height={200} alt={`wisetech alarm sistemi resmi`} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={`/images/img22.png`} className={`mx-auto`} width={200} height={200} alt={`paradox güvenlik sistemi resmi`} />
                </SwiperSlide>
              </Swiper>
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><BiServer /><figcaption>Network Çözümleri</figcaption></div>
              <Swipe imgs={['img4.jpg', 'img5.png', 'img6.png']} classes={['rounded-3xl', '', 'rounded-3xl']} alts={['switch', 'switch', 'industrial switch']} dim3={[200, 200]} delay={2500} />
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><SlWrench /><figcaption>Personel Takip Sistemleri</figcaption></div>
              <Swipe imgs={['img23.webp', 'img24.webp', 'img25.webp']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['zkteco kartlı geçiş sistemi', 'honeywell kartlı geçiş sistemi']} dim3={[200, 200]} delay={2500} />
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'>
                <style>{`svg path {stroke: rgb(248 113 113)}`}</style>
                <GrHostMaintenance /><figcaption>Bakım Anlaşmaları</figcaption>
              </div>
              <Swipe imgs={['img7.jpg', 'img8.png', 'img9.jpg']} classes={['rounded-3xl', '', 'rounded-3xl']} alts={['shaking hands', 'shaking hands', 'shaking hands']} dim2={[200, 200]} delay={3500} />
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><AiOutlineInfoCircle /><figcaption>Danışmanlık Hizmetleri</figcaption></div>
              <Swipe imgs={['img10.png', 'img11.jpeg', 'img12.jpg']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['talking people', 'talking people', 'talking people']} dim1={[220, 220]} delay={3500} />
            </figure>
            <figure className='service-card opacity-0'>
              <div className='service-card-text'><SlWrench /><figcaption>Teknik Servis</figcaption></div>
              <Swipe imgs={['img13.jpg', 'img14.jpg', 'img15.png']} classes={['rounded-3xl', 'rounded-3xl', 'rounded-3xl']} alts={['technician', 'technician', 'wrench and screwdriver']} delay={4000} />
            </figure>
          </div>
        </section>

        <section id='franchises'>
          <div className='w-10/12 mx-auto px-10 py-10 mt-10 bg-gray-100 border-red-400 border-4 rounded-3xl'>
            <h2 className='mb-5 text-center text-3xl font-semibold text-red-600'>Bayiliklerimiz</h2>
            <div className='flex flex-wrap justify-center'>
              {franchises.map((franchise, index) =>
                <img className="fran-item" src={`/logos/logo${index + 1}.png`} alt={`${franchise} logo`} key={crypto.randomUUID()} />
              )}
            </div>
          </div>
        </section>

        <section id='choose'>
          <div className='lg:w-3/4 w-11/12 mx-auto px-10 py-10 mt-10 bg-red-500 rounded-3xl'>
            <h2 className='mb-5 text-center text-4xl font-semibold text-red-100 underline underline-offset-4'>Neden bizi seçmelisiniz?</h2>
            <p className='text-xl leading-8 text-red-100'><span className='text-white text-2xl font-semibold'>Bilgi Bilişim Bilgisayar</span> olarak 24 yıllık deneyimimizle ağ ve güvenlik sistemleri, bilgisayar donanımı ve elektrik altyapı çözümleri konularında müşterilerimize en iyi hizmeti sunmaktayız. Uzman kadromuz ve son teknoloji ürünleri ile işletmenizin bilişim, güvenlik sistemleri ve elektrik altyapısı ihtiyaçlarına etkin çözümler üretiyoruz. Kurumsal firma ve kamu kurumlarının güvenilir teknoloji ve elektrik altyapısı ortağı olma vizyonumuzla faaliyetlerimizi sürdürüyor, müşterilerimizin memnuniyetini her zaman ön planda tutuyoruz. Uzun yıllara dayanan bilgi birikimi ve deneyimimizle bilişim, güvenlik sistemleri ve elektrik altyapısı konularında siz değerli müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.</p>
          </div>
        </section>
      </main>
    </Layout >
  )
}
export function Swipe({ imgs, classes, alts, dim1 = [300, 300], dim2 = [300, 300], dim3 = [300, 300], delay }) {
  return (
    <Swiper effect={'flip'} slidesPerView={1} loop={true} modules={[Autoplay, EffectFlip]} autoplay={{ delay: delay }}>
      <SwiperSlide>
        <Image src={`/images/${imgs[0]}`} className={`mx-auto ${classes[0]}`} width={dim1[0]} height={dim1[1]} alt={`${alts[0]} image`} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={`/images/${imgs[1]}`} className={`mx-auto ${classes[1]}`} width={dim2[0]} height={dim2[1]} alt={`${alts[1]} image`} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={`/images/${imgs[2]}`} className={`mx-auto ${classes[2]}`} width={dim3[0]} height={dim3[1]} alt={`${alts[2]} image`} />
      </SwiperSlide>
    </Swiper>
  )
}