import React, { useState } from 'react';
import axios from 'axios';
import monitor from '../imgProducts/monitor.jpeg';
import hp from '../imgProducts/hp.jpeg';

function InformaticaView() {
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
            <h1 className='text-xl mb-8'>Informática</h1>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={hp} className='w-72 h-60' alt='' />
                    <h5>HP</h5>
                    <p>Computador Gaming HP Victus AMD Ryzen 5 5600H 8 GB</p>
                    <p>$ 2.889.999</p>
                    <p>Vendido por: Playstore</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'HP',
                                name: 'Computador Gaming HP Victus AMD Ryzen 5 5600H 8 GB',
                                price: '2.889.999',
                                img: "http://localhost:5173/src/imgProducts/hp.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={monitor} className='w-72 h-60' alt='' />
                    <h5>SAMSUNG</h5>
                    <p>Monitor Samsung Ips De 24 Full Hd Freesync 75Hz</p>
                    <p>$ 489.900</p>
                    <p>Vendido por: Teknopolis</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'SAMSUNG',
                                name: 'Monitor Samsung Ips De 24 Full Hd Freesync 75Hz',
                                price: '489.900',
                                img: "http://localhost:5173/src/imgProducts/monitor.jpeg"
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

export default InformaticaView;
