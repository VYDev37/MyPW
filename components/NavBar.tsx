"use client";

import Link from 'next/link';
import { useState } from 'react';
import appConfig from '@/app.config';

export default function NavBar() {
    const [opened, setOpened] = useState<boolean>(false);
    const navLinks = [
        { label: "Home", ref: "#home" },
        { label: "About", ref: "#about" },
        { label: "Skills", ref: "#skills" },
        { label: "Works", ref: "#works" },
        { label: "Contact", ref: "#contact" }
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
            {/* The Floating Nav Container */}
            <nav className="pointer-events-auto relative w-full max-w-4xl bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl md:rounded-full px-6 py-3 shadow-2xl transition-all duration-300">

                {/* Main Flexbar (Logo + Desktop Links + Mobile Burger) */}
                <div className="flex justify-between items-center w-full">

                    {/* Logo (Left) */}
                    <Link className="flex items-center space-x-2 group shrink-0" href="/">
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300">
                            {appConfig.ownerName}
                        </span>
                    </Link>

                    {/* Desktop Menu (Center/Right - Hidden on Mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link, id) => (
                                <li key={id}>
                                    <Link
                                        href={link.ref}
                                        className="text-slate-300 hover:text-sky-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] font-medium transition-all duration-300 text-sm tracking-wide uppercase"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Toggle Button (Right - Hidden on Desktop) */}
                    <button
                        className="md:hidden p-2 -mr-2 text-slate-400 hover:text-white active:scale-90 focus:outline-none transition-all duration-300 shrink-0"
                        onClick={() => setOpened(!opened)}
                        aria-label="Toggle Menu"
                    >
                        <i className={`fas ${opened ? 'fa-times' : 'fa-bars'} text-xl w-6 text-center`}></i>
                    </button>
                </div>

                {/* Mobile Menu Dropdown (Detached & Animated below the pill) */}
                <div
                    className={`md:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-2xl transition-all duration-300 origin-top transform-gpu backface-hidden ${opened ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                >
                    <ul className="flex flex-col space-y-1">
                        {navLinks.map((link, id) => (
                            <li key={id}>
                                <Link
                                    href={link.ref}
                                    onClick={() => setOpened(false)}
                                    className="block w-full px-4 py-3 rounded-xl text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 active:bg-slate-800 active:scale-[0.98] font-medium transition-all duration-200 text-base"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}