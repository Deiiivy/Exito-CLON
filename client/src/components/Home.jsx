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
                    <div>
                        <Link to="/phones"><img className='cursor-pointer hover:translate-y-3' src={phones} alt="" /></Link>
                        <h2>Telefonia</h2>
                    </div>

                    <div>
                        <Link to="/colchones"><img className='cursor-pointer hover:translate-y-3' src={colchones} alt="" /></Link>
                        <h2>Colchones</h2>
                    </div>

                    <div>
                    <Link to="/consolas"><img className='cursor-pointer hover:translate-y-3' src={consolas} alt="" /></Link>
                    <h2>Consolas</h2>
                    </div>

                    <div>
                    <Link to="/electrodomesticos"><img className='cursor-pointer hover:translate-y-3' src={electroDomesticos} alt="" /></Link>
                    <h2>Electrodomesticos</h2>
                    </div>

                    <div>
                    <Link to="/jugueteria"><img className='cursor-pointer hover:translate-y-3' src={jugueteria} alt="" /></Link>
                    <h2>Jugueteria</h2>
                    </div>

                    <div>
                    <Link to="/informatica"><img className='cursor-pointer hover:translate-y-3' src={informatica} alt="" /></Link>
                    <h2>Informatica</h2>
                    </div>

                    <div>
                    <Link to="/televisores"><img className='cursor-pointer hover:translate-y-3' src={televisores} alt="" /></Link>
                    <h2>Televisores</h2>
                    </div>

                    <div>
                    <Link to="/cocina"><img className='cursor-pointer hover:translate-y-3' src={cocina} alt="" /></Link>
                    <h2>Cocina</h2>
                    </div>

                    <div>
                    <Link to="/navidad"><img className='cursor-pointer hover:translate-y-3' src={navidad} alt="" /></Link>
                    <h2>Navidad</h2>
                    </div>
                    
                    <div>
                    <Link to="/mercado"><img className='cursor-pointer hover:translate-y-3' src={mercado} alt="" /></Link>
                    <h2>Mercado</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home