import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState([]);
    const [numItem, setNumItem] = useState('')

    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await axios.get('http://localhost:4000/api/cart/getProducts');
            setCart(response.data)
            if(response.data.length === 0){
                setNumItem('No hay Productos')
            }else {
                setNumItem('')
            }
        } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        getProducts();
      }, [cart]);

      const handleDelete = async(id) => {
        await axios.delete(`http://localhost:4000/api/cart/deleteProduct/${id}`)
        const updatedCart = cart.filter(item => item._id !== id);
            setCart(updatedCart);
      }
    
    return (
      <div className='m-8'>
        <h1 className='font-semibold mb-6'>Carrito de Compras</h1>
        <div className='grid grid-cols-3 gap-5'>
                {
                    cart.map((item) => (
                        <div key={item._id} className='flex flex-col items-center'>
                        <p>{item.name}</p>
                        <img src={item.img} className='w-36' alt="" />
                        <span className='font-bold'>$ {item.price}</span>
                        <button className='bg-red-500 px-4 py-2 rounded-md text-white
                        hover:bg-red-700' onClick={()=> handleDelete(item._id)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
            {numItem && <p>{numItem}</p>}
        </div>
      
    );
  }
  
export default Cart;
