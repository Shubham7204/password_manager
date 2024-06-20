import React from 'react'
import githubLogo from '../assets/icons/github.svg';

export const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className='mycontainer flex justify-between items-center px-4 py-5 h-14'>
                <div className='logo font-bold text-white text-2xl'>
                    <span className='text-green-200'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-1' src={githubLogo} alt="github logo" />
                        <span className='font-bold px-2'>GitHub</span>
                    </button>
                </a>
            </div>

        </nav>
    )
}
