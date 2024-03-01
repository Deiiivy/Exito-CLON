import React from 'react'
import barbi from '../imgProducts/barbi.jpeg'
import carros from '../imgProducts/carros.jpeg'

function JugueteriaView() {
  return (
    <div className='m-8'>
    <h1 className='text-xl mb-8'>Jugueteria</h1>
    <div className='flex gap-20'>

    <div className='flex flex-col gap-3 w-60'>
    <img src={barbi} className='w-72 h-60' alt="" />
    <h5>BARBIE</h5>
    <p>Barbie Nueva Casa de los Sueños BARBIE</p>
    <p>$ 1.399.990</p>
    <p>Vendido por: Éxito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>

    <div className='flex flex-col gap-3 w-60'>
    <img src={carros} className='w-72 h-60' alt="" />
    <h5>HOT WHEELS</h5>
    <p>Patineta de Juguete HOT WHEELS Fingerboard</p>
    <p>$ 34.990</p>
    <p>Vendido por: Éxito</p>
    <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
    w-full' >Agregar<box-icon name='cart'></box-icon></button>
    </div>
    </div>
</div>
  )
}

export default JugueteriaView