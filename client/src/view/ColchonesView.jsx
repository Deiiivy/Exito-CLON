import React from 'react'
import colchon1 from '../imgProducts/colchon1.jpeg'
import colchon2 from '../imgProducts/colchon2.jpeg'
import { useState } from 'react'
import axios from 'axios'

function ColchonesView() {
    const [cart, setCart] = useState([])

    const addToCart = async (product) => {
        try {
            const response = await axios.post('http://localhost:4000/api/cart/createProduct', product);
            setCart([...cart, response.data]);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }
  return (
    <div className='m-8'>
        <h1 className='text-xl mb-8'>Colchones</h1>
        <div className='flex gap-20'>

        <div className='flex flex-col gap-3 w-60'>
        <img src={colchon1} className='w-72 h-60' alt="" />
        <h5>EXITO</h5>
        <p>Colchón EXITO Sencillo (100 x 190 cm) MP100 </p>
        <p>$ 314.991</p>
        <p>Vendido por: Éxito</p>
        <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'EXITO',
                                name: 'Colchón EXITO Sencillo (100 x 190 cm) MP100',
                                price: '314.991',
                                img: "http://localhost:5173/src/imgProducts/colchon1.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
        </div>

        <div className='flex flex-col gap-3 2-60'>
        <img src={colchon2} className='w-72 h-60' alt="" />
        <h5>COMFORT</h5>
        <p>Colchón COMFORT Doble (140 x 190 cm)</p>
        <p>$ 631.042</p>
        <p>Vendido por: Éxito</p>
        <button className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600
        w-full' onClick={()=> {
            addToCart({
                provedor: 'COMFORT',
                name: 'Colchón COMFORT Doble (140 x 190 cm)',
                price: '631.042',
                img: "http://localhost:5173/src/imgProducts/colchon2.jpeg"
            })
        }}>Agregar<box-icon name='cart'></box-icon></button>
        </div>
        </div>
    </div>
  )
}

export default ColchonesView