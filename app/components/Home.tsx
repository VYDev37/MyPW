import appConfig from "@/app.config";
import Link from "next/link";

export default function HomePage() {
    return (
        <section id="home" className="flex flex-col items-center justify-center bg-slate-950 text-center py-20 px-4 min-h-[80vh]">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Welcome to my page!</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                    Hi, I'm <span className="text-sky-400">{appConfig.ownerName}</span>.
                </h2>
                <div className="flex flex-row text-xl mt-10 mb-5 justify-center text-white">
                    <div className="col-10 col-md-5">{appConfig.ownerDescription}</div>
                </div>
            </div>
            <div className="col-12 col-md-12 flex justify-center mt-5">
                <Link className="button text-white rounded-xl border-0 outline-0 text-decoration-none bg-sky-400 py-2 px-4 fs-5 my-4 mx-3 font-bold opacity-100 transition duration-300 hover:opacity-75 lg:text-xl md:text-xs" 
                    href="/api/download-cv" target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i>Download CV</Link>
                <Link className="button text-white bg-transparent border-solid border-2 rounded-xl outline-0 border-sky-400 text-decoration-none py-2 px-4 fs-5 my-4 mx-3 font-bold transition duration-300 opacity-100 hover:opacity-75 lg:text-xl md:text-xs"
                    href="#about">About me</Link>
            </div>
        </section>
    )
}