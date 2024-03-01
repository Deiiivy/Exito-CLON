import React, { useState } from 'react';
import axios from 'axios';
import ventilador from '../imgProducts/ventilador.jpeg';
import lavadora from '../imgProducts/lavadora.jpeg';

function ElectroDomesticos() {
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
            <h1 className='text-xl mb-8'>Electrodomésticos</h1>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={ventilador} className='w-72 h-60' alt='' />
                    <h5>SAMURAI</h5>
                    <p>Ventilador Tropical Plus Negro SAMURAI VE2312I0</p>
                    <p>$ 267.900</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'SAMURAI',
                                name: 'Ventilador Tropical Plus Negro SAMURAI VE2312I0',
                                price: '267.900',
                                img: "http://localhost:5173/src/imgProducts/ventilador.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={lavadora} className='w-72 h-60' alt='' />
                    <h5>LG</h5>
                    <p>Lavadora LG Carga Superior 18 kg (40 lb) WT18DV6.AS</p>
                    <p>$ 1.828.447</p>
                    <p>Vendido por: Éxito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'LG',
                                name: 'Lavadora LG Carga Superior 18 kg (40 lb) WT18DV6.AS',
                                price: '1.828.447',
                                img: "http://localhost:5173/src/imgProducts/lavadora.jpeg"
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

export default ElectroDomesticos;
