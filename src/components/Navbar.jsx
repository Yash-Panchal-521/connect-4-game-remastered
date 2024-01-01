import React from 'react'

const Navbar = () => {
    const handleClick = () => {
        window.location.href = 'https://github.com/Yash-Panchal-521';
    };
    return (
        <div className='bg-teal-500 h-10 flex flex-row w-full'>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-500 hover:border hover:border-slate-900 hover:rounded-lg'>home</div>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-500 hover:border hover:border-slate-900 hover:rounded-lg'>Ai Diificulty</div>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-500 hover:border hover:border-slate-900 hover:rounded-lg' onClick={handleClick}>About me</div>
        </div>
    )
}

export default Navbar