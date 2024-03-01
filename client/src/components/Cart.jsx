import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

function Cart() {
    const [cart, setCart] = useState([]);
    const [deleted, setDeleted] = useState(false)
    const [numItem, setNumItem] = useState('')
    const [buy, setBuy] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/cart/getProducts');
                setCart(response.data)
                if (response.data.length === 0) {
                    setNumItem('No hay Productos')
                } else {
                    setNumItem('')
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProducts();
    }, [cart]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/api/cart/deleteProduct/${id}`)
        const updatedCart = cart.filter(item => item._id !== id);
        setCart(updatedCart);
        setDeleted(true)
        setTimeout(() => {
            setDeleted(false)
        }, 2000);
    }


    const handleDeleteAll = async () => {
        try {
            await axios.delete('http://localhost:4000/api/cart/comprado')
        } catch (error) {
            console.log('error');
        }
    }

    const handleCheckout = async () => {
        const response = await axios.post('http://localhost:4000/api/cart/checkout', { cart });
        const sessionId = response.data.sessionId;
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
            console.error('Error:', error);
        }
    }
    


    return (
        <div className='m-8 border border-slate-600 px-3 py-7 rounded'>
            <h1 className='font-semibold mb-6'>Carrito de Compras</h1>
            {deleted && <p className='absolute right-20 top-40 bg-yellow-600 text-white font-bold rounded'>producto eliminado</p>}
            <div className='grid grid-cols-3 gap-5'>
                {
                    cart.map((item) => (
                        <div key={item._id} className='flex flex-col items-center'>
                            <p>{item.name}</p>
                            <img src={item.img} className='w-36' alt="" />
                            <span className='font-bold'>$ {item.price}</span>
                            <button className='bg-red-500 px-4 py-2 rounded-md text-white
                        hover:bg-red-700' onClick={() => handleDelete(item._id)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
            {numItem && <p>{numItem}</p>}
            <button className='bg-orange-500 px-4 py-2 rounded-md m-8 text-white font-bold
        hover:bg-orange-700' onClick={handleDeleteAll}>Comprar</button>
         {/*<button className='bg-green-500 px-4 py-2 rounded-md m-8 text-white font-bold
     hover:bg-green-700' onClick={handleCheckout}>Pagar con Stripe</button>*/}
        </div>

    );
}

export default Cart;
