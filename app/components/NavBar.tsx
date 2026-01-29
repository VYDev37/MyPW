"use client";

import Link from 'next/link';
import { useState } from 'react';
import appConfig from '@/app.config';

export default function NavBar() {
    const [opened, setOpened] = useState<boolean>(false);
    const navLinks = appConfig.navLinks;

    return (
        <header className="bg-slate-900 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link className="flex items-center space-x-2" href="/">
                    <span className="text-xl font-bold tracking-tight text-sky-400">My Page</span>
                </Link>
                <button className="md:hidden text-gray-300 hover:text-white focus:outline-none" onClick={() => setOpened(!opened)}>
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {opened ? (
                            <i className="fas fa-bars"></i>
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                        )}
                    </svg>
                </button>
                <div className={`${opened ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-16 mt-4 md:mt-0">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <Link href={link.ref} className="block text-gray-300 hover:text-sky-400 font-medium transition-colors duration-200 py-2 md:py-0">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="flex items-center space-x-2 hidden md:block" href="/">
                    <span className="fs-4 ps-3 font-bold text-sky-400"> {appConfig.ownerName}</span>
                </Link>
            </nav>
            
        </header>
    );
}