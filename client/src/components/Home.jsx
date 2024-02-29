import React from 'react'
import phones from '../assets/celularesImg.webp'
import colchones from '../assets/colchonesImg.webp'
import consolas from '../assets/consolasImg.webp'
import electroDomesticos from '../assets/electrodomesticosImg.webp'
import jugueteria from '../assets/jugueteriaImg.webp'
import informatica from '../assets/informaticaImg.webp'
import televisores from '../assets/televisoresImg.webp'
import cocina from '../assets/mundoCocinaImg.webp'
import navidad from '../assets/navidadImg.webp'
import mercado from '../assets/mercadoImg.webp'

function Home() {
  return (
    <div className='m-12'>
        <h2 className='mb-8 text-lg'>Compra por categorias</h2>
        <div className='flex justify-center'>
            <div className='grid grid-cols-5 gap-10'>
                <img className='cursor-pointer hover:translate-y-3' src={phones} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={colchones} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={consolas} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={electroDomesticos} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={jugueteria} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={informatica} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={televisores} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={cocina} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={navidad} alt="" />
                <img className='cursor-pointer hover:translate-y-3' src={mercado} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home