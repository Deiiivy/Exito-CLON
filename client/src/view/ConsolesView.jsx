import React from 'react'
import xbox from '../imgProducts/xbox.jpeg'
import play from '../imgProducts/play.jpeg'

function ConsolesView() {
  return (
    <div className='m-8'>
    <h1 className='text-xl mb-8'>Consolas</h1>
    <div className='flex gap-20'>

    <div className='flex flex-col gap-3 w-60'>
    <img src={xbox} className='w-72 h-60' alt="" />
    <h5>XBOX</h5>
    <p>CONSOLA SERIES S XBOX RRS00004</p>
    <p>$ 1.599.900</p>
    <p>Vendido por: Éxito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>

    <div className='flex flex-col gap-3 w-60'>
    <img src={play} className='w-72 h-60' alt="" />
    <h5>SONY</h5>
    <p>Consola Ps5 Lector de Disco 825 GB Blanca</p>
    <p>$ 2.498.999</p>
    <p>Vendido por: Éxito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>
    </div>
</div>
  )
}

export default ConsolesView