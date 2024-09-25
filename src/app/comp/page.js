'use client'
import Link from 'next/link';
import React, { useState } from 'react'


export default function HomePage() {

    const [count, setCount] = useState({
        username: "",
        password: ""
    })
    const [datas, setdatas] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (count.username === "" || count.password === "") {
            alert("Please fill the form");
            return;
        }
        setdatas([...datas, count]);
        setCount({ username: "", password: "" });
        console.log(datas);
    };
    const navigateToGoogle = () => {
        // You can replace this with an actual navigation to Google if required
        window.location.href = 'https://www.google.com';
    };

    const navigateToFacebook = () => {
        // You can replace this with an actual navigation to Facebook if required
        window.location.href = 'https://www.facebook.com';
    };


    return (
        <div className='w-full h-screen bg-blue-950 flex items-center justify-center'>
            <div className='w-[28rem] border rounded-md'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center justify-center gap-4 p-4 '>
                        <h1 className='text-5xl font-bold mb-6'>Login</h1>
                        <input type="text" placeholder='Username' className='w-full border p-2 rounded text-black' onChange={(e) => setCount({ ...count, username: e.target.value })} value={count.username} />
                        <input type="password" placeholder='Password' className='w-full border p-2 rounded text-black' onChange={(e) => setCount({ ...count, password: e.target.value })} value={count.password} />
                        <Link className='w-full bg-blue-900 text-white p-2 rounded text-center' href={`/${count.username}`}>Login</Link>

                    </div>
                </form>
                <div className='w-full p-4 flex justify-between gap-5'>
                    <button className='text-1xl border w-full rounded-full p-2' onClick={navigateToGoogle}>Google</button>
                    <button className='text-1xl border w-full rounded-full p-2' onClick={navigateToFacebook}>Facebook</button>
                </div>
            </div>

        </div>
    )
}
