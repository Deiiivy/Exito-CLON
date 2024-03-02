import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'boxicons';
import logo from '../assets/logo.svg';


function Header() {
    const [cart, setCart] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/cart/getProducts');
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProducts();
    }, [cart]);

    const outMenu = ()=> {
        setShowMenu(false)
    }

    return (
        <header className='flex flex-col'>
            <div className='flex gap-4 h-10 justify-center bg-[#E8156B] py-2 text-white'>
                <span className='text-lg'>Gana un bono de $29 mil por comprar $100 mil en mercado 🥑🥚</span>
                <Link to="/" ><button className='bg-yellow-300 text-red-600 rounded text-xs px-2 hover:bg-white'>¡Compra ya!</button></Link>
            </div>
            <div className='flex justify-between bg-[#FFEF00] px-4 py-2 items-center'>
                <div className='flex gap-6'>
                    <Link to="/"><img src={logo} className='w-20' alt="" /></Link>
                    <div className='flex gap-4 cursor-pointer items-center' onClick={() => setShowMenu(true)}  >
                        <box-icon name='menu'></box-icon>
                        <p className='font-bold'>Menú</p>
                    </div>

                    {showMenu && <div className='absolute left-0 top-0 bottom-0 w-80 border border-gray-500'>
                        <div className='bg-[#FFEF00] flex justify-between items-center px-4 py-3'>
                        <Link to='/'><img src={logo} className='w-20' alt="" /></Link>
                            <button className='cursor-pointer' onClick={outMenu}><box-icon name='x'></box-icon></button>
                        </div>
                        <div className='flex flex-col bg-white h-screen p-4 gap-4'>
                            <Link to='/consolas'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>consolas</p></Link>
                            <Link to='/mercado'> <p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Mercado</p></Link>
                            <Link to='/colchones'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Colchones</p></Link>
                            <Link to='/televisores'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Televisores</p></Link>
                            <Link to='/jugueteria'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Jugueteria</p></Link>
                            <Link to='/navidad'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Navidad</p></Link>
                            <Link to='/cocina'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Cocina</p></Link>
                            <Link to='/electrodomesticos'><p className='cursor-pointer hover:bg-slate-200 hover:rounded-sm'>Electrodomesticos</p></Link>
                        </div>
                    </div>}

                    <div className='flex items-center cursor-pointer'>
                        <input type="text" placeholder="Buscar en exito.com" className='w-64 h-8 px-4 rounded-lg
                outline-none' />
                        <box-icon name='search-alt-2' ></box-icon>
                    </div>
                    <box-icon name='map'></box-icon>
                    <p className='font-semibold'>¿Como quieres recibir tu pedido? </p>
                </div>
                    <div className='flex gap-8'>
                        <Link to='/register'><div className='flex flex-col items-center cursor-pointer'>
                            <box-icon name='user'></box-icon>
                            <p>Mi cuenta</p>
                        </div></Link>   
                    <Link to="/cart">
                        <div className='flex flex-col items-center relative'>
                            <box-icon name='cart'></box-icon>
                            <p>Carrito</p>
                            <span className='absolute -top-1 -right-1 bg-orange-500 text-white rounded-full h-4 w-4
                            text-center text-xs font-bold'>{cart.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
