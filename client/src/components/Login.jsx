import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import axios from "axios"

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/cart/login', { email, password })
            .then(result => {
                console.log(result);
                if(result.data === "success"){
                    navigate("/");
                }else {
                    setMessage('please try now')
                }
            })
            .catch(err => console.log(err));
            setMessage("An error occurred while trying to login.");
    };

    return (
        <div className='Login bg-slate-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center h-screen'>
            <form onSubmit={handleSubmit}>
                <div className='w-64 bg-slate-100 p-6 rounded-lg'>
                    <h1 className='text-2xl font-bold mb-4'>Login</h1>
                    <input
                        className='w-full mb-2 p-2 rounded border border-gray-300'
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                    <input
                        className='w-full mb-2 p-2 rounded border border-gray-300'
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>
                        Login
                    </button>
                    <p className='mt-2 text-sm'>
                        Don't have an account? <Link to="/register" className='text-blue-500 cursor-pointer'>Sign up here</Link>
                    </p>
                </div>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Login;
