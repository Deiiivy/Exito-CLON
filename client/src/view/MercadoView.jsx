import React, { useState } from 'react';
import axios from 'axios';
import huevos from '../imgProducts/huevos.jpeg';
import cafe from '../imgProducts/cafe.jpeg';

function MercadoView() {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        try {
            const response = await axios.post('http://localhost:4000/api/cart/createProduct', product);
            setCart([...cart, response.data]);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className='m-8'>
            <h1 className='text-xl mb-8'>Mercado</h1>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={cafe} className='w-72 h-60' alt='' />
                    <h5>EKONO</h5>
                    <p>Cafe Molido EKONO 500 gr </p>
                    <p>$ 12.950</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'Éxito',
                                name: 'Cafe Molido EKONO 500 gr',
                                price: '12.950',
                                img: "http://localhost:5173/src/imgProducts/cafe.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={huevos} className='w-72 h-60' alt='' />
                    <h5>SMN</h5>
                    <p>Huevo Rojo A X 30 SMN 30 und</p>
                    <p>$ 12.590</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'Éxito',
                                name: 'Huevo Rojo A X 30 SMN 30 und',
                                price: '12.590',
                                img: "http://localhost:5173/src/imgProducts/huevos.jpeg"
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

export default MercadoView;
