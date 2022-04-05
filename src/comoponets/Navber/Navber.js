import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navber = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-between container mx-auto py-5'>
             <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`sm:inline md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'} ml-3 text-2xl`}>
            <Link className='ml-3 font-normal border-b-2 hover:border-b-2 border-indigo-500 hover:text-cyan-600' to="/">Home</Link>
            <Link className='ml-5 font-normal hover:border-b-2 border-indigo-500 hover:text-cyan-600' to="/reviews">Reviews</Link>
            <Link className='ml-5 font-normal hover:border-b-2 border-indigo-500 hover:text-cyan-600' to="/dashboard">Dashboard</Link>
            <Link className='ml-5 font-normal hover:border-b-2 border-indigo-500 hover:text-cyan-600' to="/blogs">Blogs</Link>
            <Link className='ml-3 font-normal hover:border-b-2 border-indigo-500 hover:text-cyan-600' to="/about">
                About
            </Link>
            </nav>
            <div>
                <img className='w-20' src="https://mir-s3-cdn-cf.behance.net/projects/404/4656d171165705.Y3JvcCw2NjIsNTE4LDg2Nyww.png" alt="img" />
            </div>
        </div>
    );
};

export default Navber;