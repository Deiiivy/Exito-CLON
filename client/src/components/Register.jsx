import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, serError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:4000/api/cart/createUser', { name, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => console.log(err));
    };
  return (
    <div className='Register bg-slate-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center h-screen'>
    <form onSubmit={handleSubmit}>
        <div className='w-64 bg-slate-100 p-6 rounded-lg'>
            <h1 className='text-2xl font-bold mb-4'>Sign up</h1>
            <input
                className='w-full mb-2 p-2 rounded border border-gray-300'
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                required
            />
            <input
                className='w-full mb-2 p-2 rounded border border-gray-300'
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
            />
            <input
                className='w-full mb-2 p-2 rounded border border-gray-300'
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
            />
            <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>
                Register
            </button>
            <p className='mt-2 text-sm'>
                have account? <Link to="/login" className='text-blue-500 cursor-pointer'>Sign in here</Link>
            </p>
        </div>
        {error && <p>Error</p>}
    </form>
</div>
  )
}

export default Register