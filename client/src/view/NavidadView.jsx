import React, { useState } from 'react';
import axios from 'axios';
import pie from '../imgProducts/pie.jpeg';
import arbol from '../imgProducts/arbol.jpeg';

function NavidadView() {
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
            <h1 className='text-xl mb-8'>Navidad</h1>
            {agg && <p className='absolute right-20 top-32 bg-green-500 font-bold text-white
      px-3 py-2 rounded-md'>Producto agregado al carrito</p>}
            <div className='flex gap-20'>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={arbol} className='w-72 h-60' alt='' />
                    <h5>GENERICO</h5>
                    <p>Arbol de Navidad Home Sale 180 cm Robusto</p>
                    <p>$ 189.900</p>
                    <p>Vendido por: home sale</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'home sale',
                                name: 'Arbol de Navidad Home Sale 180 cm Robusto',
                                price: '189.900',
                                img: "http://localhost:5173/src/imgProducts/arbol.jpeg"
                            })
                        }
                    >
                        Agregar<box-icon name='cart'></box-icon>
                    </button>
                </div>
                <div className='flex flex-col gap-3 w-60'>
                    <img src={pie} className='w-72 h-60' alt='' />
                    <h5>FINLANDEK</h5>
                    <p>Pie de arbol 90cm diametro FINLANDEK </p>
                    <p>$ 68.990</p>
                    <p>Vendido por: Exito</p>
                    <button
                        className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
                        onClick={() =>
                            addToCart({
                                provedor: 'Exito',
                                name: 'Pie de arbol 90cm diametro FINLANDEK',
                                price: '68.990',
                                img: "http://localhost:5173/src/imgProducts/pie.jpeg"
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

export default NavidadView;
