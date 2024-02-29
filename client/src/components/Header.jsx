import React from 'react';
import 'boxicons';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className='flex flex-col'>
        <div className='flex gap-4 h-10 justify-center bg-[#E8156B] py-2 text-white'>
            <span className='text-lg'>Gana un bono de $29 mil por comprar $100 mil en mercado 🥑🥚</span>
            <button className='bg-yellow-300 text-red-600 rounded text-xs px-2 hover:bg-white'>¡Compra ya!</button>
        </div>
        <div className='flex justify-between bg-[#FFEF00] px-4 py-2 items-center'>
            <div className='flex gap-6'>
                <img src={logo} className='w-20' alt="" />
                <div className='flex gap-4 cursor-pointer items-center'>
                <box-icon name='menu'></box-icon>
                <p className='font-bold'>Menú</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                <input type="text" placeholder="Buscar en exito.com" className='w-64 h-8 px-4 rounded-lg
                outline-none' />
               <box-icon name='search-alt-2' ></box-icon>
                </div>
                <box-icon name='map' ></box-icon>
                <p className='font-semibold'>¿Como quieres recibir tu pedido? </p>
            </div>
            <div className='flex gap-8'>
                <div className='flex flex-col items-center'>
                <box-icon name='user'></box-icon>
                <p>Mi cuenta</p>
                </div>
                <div className='flex flex-col items-center'>
                <box-icon name='cart'></box-icon>
                <p>Carrito</p>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
