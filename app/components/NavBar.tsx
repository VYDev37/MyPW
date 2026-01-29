"use client";

import Link from 'next/link';
import { useState } from 'react';
import appConfig from '@/app.config';

export default function NavBar() {
    const [opened, setOpened] = useState<boolean>(false);
    const navLinks = appConfig.navLinks;

    return (
        <header className="bg-slate-900 shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <Link className="flex items-center space-x-2" href="/">
                        <span className="text-xl font-bold tracking-tight text-sky-400">My Page</span>
                    </Link>
                    
                    {/* Mobile toggle button */}
                    <button className="md:hidden text-gray-300 hover:text-white focus:outline-none" onClick={() => setOpened(!opened)}>
                        <i className={`fas ${opened ? 'fa-times' : 'fa-bars'} text-2xl transition-all duration-300`}></i>
                    </button>
                </div>

                <div className={`${opened ? 'block opacity-100 mt-6' : 'hidden md:flex opacity-0 md:opacity-100'} transition-all duration-300 w-full md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0">
                        {navLinks.map(link => (
                            <li key={link.id} className="w-full border-b border-slate-800 md:border-none pb-2 md:pb-0">
                                <Link href={link.ref} onClick={() => setOpened(false)} className="block text-gray-300 hover:text-sky-400 font-medium transition-colors duration-200 py-2 md:py-0 text-lg md:text-base">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Owner Name (Desktop Only) */}
                <Link className="hidden md:block" href="/">
                    <span className="text-lg font-bold text-sky-400">{appConfig.ownerName}</span>
                </Link>
            </nav>
        </header>
    );
}