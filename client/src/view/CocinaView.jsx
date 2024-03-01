import React, { useState } from 'react';
import axios from 'axios';
import termo from '../imgProducts/termo.jpeg';
import sarten from '../imgProducts/sarten.jpeg';

function CocinaView() {
    const [cart, setCart] = useState([]);
    const [agg, setAgg] = useState(false);

    const addToCart = async (product) => {
        try {
            const response = await axios.post('http://localhost:4000/api/cart/createProduct', product);
            setCart([...cart, response.data]);
            setAgg(true);
            setTimeout(() => {
                setAgg(false);
            }, 3000);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className='m-8'>
            <h1 className='text-xl mb-8'>Cocina</h1>
            {agg && <p className='absolute right-20 top-32 bg-green-500 font-bold text-white
      px-3 py-2 rounded-md'>Producto agregado al carrito</p>}
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={termo} className='w-72 h-60' alt='' />
                    <h5>HOME ELEMENTS</h5>
                    <p>Termo Bomba Home Elements 1,9L </p>
                    <p>$ 67.900</p>
                    <p>Vendido por: Exito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'Exito',
                                name: 'Termo Bomba Home Elements 1,9L',
                                price: '67.900',
                                img: 'http://localhost:5173/src/imgProducts/termo.jpeg',
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={sarten} className='w-72 h-60' alt='' />
                    <h5>HOGAR UNIVERSAL</h5>
                    <p>Sartenes X3 18-20-24 Futura</p>
                    <p>$ 43.900</p>
                    <p>Vendido por: Exito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'HOGAR UNIVERSAL',
                                name: 'Sartenes X3 18-20-24 Futura',
                                price: '43.900',
                                img: "http://localhost:5173/src/imgProducts/sarten.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CocinaView;
