"use client";
import { useProjects } from "@/app/hooks";

export default function Works() {
    const { projects, loading } = useProjects();

    return (
        <section id="works" className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-[80vh] bg-gray-950 ">
            <h1 className="font-bold mb-3 text-white text-3xl">My Works</h1>
            <p className="text-gray-200 text-2xl mt-3">This section contains my published works on GitHub.</p>

            {loading ? (
                <p className="lead">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-8 mt-15 lg:mx-40">
                    {projects && projects.map((project, idx) => (
                        <div className="h-full" key={idx}> 
                            {/* Card */}
                            <div className="flex flex-col h-full p-6 rounded-xl border border-gray-900 bg-slate-900 text-white text-start shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:border-sky-500/50">
                                {/* Card Header */}
                                <div className="flex justify-between items-start mb-3">
                                    <h5 className="font-bold text-xl leading-tight">{project.name}</h5>
                                    <span className="text-xs font-mono bg-gray-800 px-2 py-1 rounded text-sky-400">
                                        {project.language}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description || 'No description available for this repository.'}
                                </p>

                                {/* Card Footer */}
                                <div className="mt-auto pt-4 border-t border-gray-800/50">
                                    <div className="flex gap-3">
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer"
                                            className="flex-1 text-center bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-white text-sm font-bold transition">
                                            <i className="fab fa-github mr-2"></i>
                                            {project.homepage ? "Code" : "Source"}
                                        </a>
                                        {project.homepage && (
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer"
                                                className="flex-1 text-center bg-sky-500 hover:bg-sky-400 p-2 rounded-lg text-white text-sm font-bold transition">
                                                <i className="fas fa-external-link-alt mr-2"></i>Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}