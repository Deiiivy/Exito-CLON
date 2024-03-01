import React from 'react'
import tv1 from '../imgProducts/tv1.jpeg'
import tv2 from '../imgProducts/tv2.jpeg'

function TvView() {
  return (
    <div className='m-8'>
    <h1 className='text-xl mb-8'>Jugueteria</h1>
    <div className='flex gap-20'>

    <div className='flex flex-col gap-3 w-60'>
    <img src={tv1} className='w-72 h-60' alt="" />
    <h5>SAMSUNG</h5>
    <p>Televisor SAMSUNG 58 Pulgadas LED Uhd4K Smart TV</p>
    <p>$ 1.799.900</p>
    <p>Vendido por: Exito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>

    <div className='flex flex-col gap-3 w-60'>
    <img src={tv2} className='w-72 h-60' alt="" />
    <h5>SAMSUNG</h5>
    <p>Televisor SAMSUNG 50 Pulgadas LED Uhd4K Smart TV </p>
    <p>$ 1.699.900</p>
    <p>Vendido por: Exito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>
    </div>
</div>
  )
}

export default TvView