import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'

function iletisim() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <Layout>
            <div className='bg-rose-500 min-h-screen px-10 pb-10'>
                <h2 className='py-10 text-center text-4xl font-semibold text-gray-100 underline underline-offset-4'>İletişim bilgileri ve adres</h2>
                <div className='grid md:grid-cols-2 lg:w-11/12 mx-auto gap-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.2154309173848!2d29.322599875777364!3d40.86714622810357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad90cbbc69413%3A0xa54c119387f190b4!2sBilgi%20Bili%C5%9Fim%20Bilgisayar!5e0!3m2!1str!2str!4v1691574628220!5m2!1str!2str" className='mx-auto' width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div >
                        <div className='inline-block border-b border-thin'><h3 className='text-3xl text-gray-200'>Adres</h3></div>
                        <p className='text-gray-200 text-xl'>Aydınlı mah. Zeki sk. no:1/A <br />Tuzla/İstanbul</p>

                        <div className='inline-block border-b border-thin mt-10'><h3 className='text-3xl text-gray-200'>İletişim bilgileri</h3></div>
                        <p className='text-gray-200 text-xl'><span className='font-bold'>Telefon numarası:</span> 0216 37 999 37</p>
                        <p className='text-gray-200 text-xl'><span className='font-bold'>E-posta:</span> <br /> bilgibilisim@bilgibilisim.com.tr</p>
                        <p className='text-gray-200 text-xl'>satis@bilgibilisim.com.tr</p>
                        <p className='text-gray-200 text-xl'>teknik@bilgibilisim.com.tr</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default iletisim