import appConfig from "@/app.config";
import Link from "next/link";

import { AnimateIn } from "@/components/animations";

export default function HomePage() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center bg-slate-950 text-center py-32 px-4 min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-slate-950 to-slate-950 -z-10"></div>
            <AnimateIn>
                <div className="max-w-3xl z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-6 tracking-tight">
                        Welcome to my page.
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8">
                        Hi, I'm <span className="text-sky-400 font-semibold">{appConfig.ownerName}</span>.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        {appConfig.ownerDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/api/download-cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-sky-500 text-slate-950 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-sky-400 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)]"
                        >
                            <i className="fas fa-download"></i> Download CV
                        </Link>
                        <Link
                            href="#about"
                            className="flex items-center gap-2 bg-transparent border border-slate-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:border-sky-400 hover:text-sky-400 hover:bg-sky-500/5"
                        >
                            About me
                        </Link>
                    </div>
                </div>
            </AnimateIn>
        </section>
    );
}