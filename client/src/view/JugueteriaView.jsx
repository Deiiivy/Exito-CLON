import React, { useState } from 'react';
import axios from 'axios';
import barbi from '../imgProducts/barbi.jpeg';
import carros from '../imgProducts/carros.jpeg';

function JugueteriaView() {
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
            <h1 className='text-xl mb-8'>Juguetería</h1>
            {agg && <p className='absolute right-20 top-32 bg-green-500 font-bold text-white
      px-3 py-2 rounded-md'>Producto agregado al carrito</p>}
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={barbi} className='w-72 h-60' alt='' />
                    <h5>BARBIE</h5>
                    <p>Barbie Nueva Casa de los Sueños BARBIE</p>
                    <p>$ 1.399.990</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'BARBIE',
                                name: 'Barbie Nueva Casa de los Sueños BARBIE',
                                price: '1.399.990',
                                img: "http://localhost:5173/src/imgProducts/barbi.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={carros} className='w-72 h-60' alt='' />
                    <h5>HOT WHEELS</h5>
                    <p>Patineta de Juguete HOT WHEELS Fingerboard</p>
                    <p>$ 34.990</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'HOT WHEELS',
                                name: 'Patineta de Juguete HOT WHEELS Fingerboard',
                                price: '34.990',
                                img: "http://localhost:5173/src/imgProducts/carros.jpeg"
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

export default JugueteriaView;
