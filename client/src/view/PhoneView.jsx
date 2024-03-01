import React, { useState } from 'react';
import samsung from '../imgProducts/galaxy.jpeg';
import iphone from '../imgProducts/iphone.jpeg';
import axios from 'axios';

function PhoneView() {
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
    }

  return (
    <div className='m-8'>
      <h1 className='text-xl mb-8'>Celulares</h1>
      {agg && <p className='absolute right-20 top-32 bg-green-500 font-bold text-white
      px-3 py-2 rounded-md'>Producto agregado al carrito</p>}
      <div className='flex gap-20'>
        <div className='flex flex-col gap-3 w-60'>
          <img src={samsung} className='w-72 h-60' alt='' />
          <h5>SAMSUNG</h5>
          <p>Samsung Galaxy A54 De 256Gb</p>
          <p>$ 1.429.550</p>
          <p>Vendido por: AMAZING </p>
          <button
            className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
            onClick={() =>
              addToCart({
                provedor: "SAMSUNG",
                name: 'Samsung Galaxy A54 De 256Gb',
                price: "1.429.550",
                img: "http://localhost:5173/src/imgProducts/galaxy.jpeg"
              })
            }
          >
            Agregar<box-icon name='cart'></box-icon>
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          <img src={iphone} className='w-72 h-60' alt='' />
          <h5>IPHONE</h5>
          <p>iPhone 15 128GB Rosado</p>
          <p>$ 3.349.898</p>
          <p>Vendido por: Teczone</p>
          <button
            className='flex items-center justify-center bg-orange-500 text-white rounded-xl px-5 py-2 hover:bg-orange-600 w-full'
            onClick={() =>
              addToCart({
                provedor: "APPLE",
                name: 'iPhone 15 128GB Rosado',
                price: "3.349.898",
                img: "http://localhost:5173/src/imgProducts/iphone.jpeg"
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

export default PhoneView;
