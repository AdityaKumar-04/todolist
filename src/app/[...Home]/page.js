'use client'
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
export default function Home({params}) {
    console.log(params)
    const [data, setdata] = useState('')
    const [datastore, setdatastore] = useState([])
    function hendiltclick() {
        if (data != "") {
            setdatastore([...datastore, data])
            setdata('')
        }
        else {
            alert("please enter some data")
        }

    }
    function handleDelete(index) {
        const newDataStore = [...datastore];
        newDataStore.splice(index, 1);
        setdatastore(newDataStore);
    }



    return (
        <div className='w-full h-screen bg-indigo-900'>
            <div className='w-full flex flex-col  items-center text-white py-9 font-serif border'>
                <h1 className='text-5xl font-bold'>Welcome to the Home Page {params.Home[0]} </h1>
            </div>
            <div className='w-full h-[calc(100vh-8.100rem)] border mt-2 flex justify-center'>
                <div className='w-[25rem] border p-5 my-5 rounded-xl'>
                    <h1 className='text-center text-2xl font-semibold '>Todo List</h1>
                    <div className='w-full flex items-center border py-1 bg-white mt-5 rounded-full overflow-hidden'>
                        <input type='text' className='h-[100%] w-full bg-transparent outline-none border-none text-black pl-5 font-serif' onChange={(e) => setdata(e.currentTarget.value)} value={data} />
                        <button className='py-1 px-3 text-black border-l' onClick={hendiltclick}><IoMdAdd /></button>
                    </div>
                    <div className='mt-3 border pb-5 h-[calc(100%-20%)] overflow-y-scroll overflow-x-hidden'>

                        <table>
                            <thead>
                                <tr>
                                    <th className='py-2 w-full'>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=' py-1 pl-2 hover:bg-slate-500 rounded-lg'>Add Like this </td>
                                    <td className='px-2 text-xl hover:scale-125 mb-3 cursor-pointer' onClick={handleDelete}><MdDelete /></td>
                                </tr>
                                {datastore?.map((items, index) => {
                                    return (<tr key={index}>
                                        <td className=' py-1 pl-2 hover:bg-slate-500 rounded-lg'>{items}</td>
                                        <td className='px-2 text-xl hover:scale-125 mb-3 cursor-pointer' onClick={handleDelete}><MdDelete /></td>
                                    </tr>)
                                })}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}
