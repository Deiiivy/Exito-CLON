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
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='m-12'>
        <h2 className='mb-8 text-lg'>Compra por categorias</h2>
        <div className='flex justify-center'>
            <div className='grid grid-cols-5 gap-10'>
            <Link to="/phones"><img className='cursor-pointer hover:translate-y-3' src={phones} alt="" /></Link>
          <Link to="/colchones"><img className='cursor-pointer hover:translate-y-3' src={colchones} alt="" /></Link>
          <Link to="/consolas"><img className='cursor-pointer hover:translate-y-3' src={consolas} alt="" /></Link>
          <Link to="/electrodomesticos"><img className='cursor-pointer hover:translate-y-3' src={electroDomesticos} alt="" /></Link>
          <Link to="/jugueteria"><img className='cursor-pointer hover:translate-y-3' src={jugueteria} alt="" /></Link>
          <Link to="/informatica"><img className='cursor-pointer hover:translate-y-3' src={informatica} alt="" /></Link>
          <Link to="/televisores"><img className='cursor-pointer hover:translate-y-3' src={televisores} alt="" /></Link>
          <Link to="/cocina"><img className='cursor-pointer hover:translate-y-3' src={cocina} alt="" /></Link>
          <Link to="/navidad"><img className='cursor-pointer hover:translate-y-3' src={navidad} alt="" /></Link>
          <Link to="/mercado"><img className='cursor-pointer hover:translate-y-3' src={mercado} alt="" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Home