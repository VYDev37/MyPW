"use client";

import { useProjects } from "@/hooks";
import appConfig from "@/app.config";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Works() {
    const { projects, loading } = useProjects();

    return (
        <section id="works" className="flex flex-col items-center bg-slate-950 py-16 lg:py-32 px-6 md:px-12 lg:px-24 min-h-[80vh]">
            <div className="container max-w-7xl mx-auto w-full">
                <AnimateIn>
                    <div className="text-center mb-12 lg:mb-20">
                        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white tracking-tight">My Works</h2>
                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light">
                            A collection of my open-source projects and published works on GitHub.
                        </p>
                    </div>
                </AnimateIn>

                {loading ? (
                    <div className="flex justify-center items-center h-40 w-full">
                        <div className="animate-pulse flex space-x-2">
                            <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-sky-500 rounded-full animation-delay-200"></div>
                            <div className="w-3 h-3 bg-sky-500 rounded-full animation-delay-400"></div>
                        </div>
                    </div>
                ) : (
                    <>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {projects && projects.map((project, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="group flex flex-col h-full p-6 lg:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] hover:border-sky-500/30 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.1)]">
                                        <div className="flex justify-between items-start mb-4 gap-4">
                                            <h3 className="font-bold text-lg md:text-xl text-white leading-tight group-hover:text-sky-400 transition-colors">
                                                {project.name}
                                            </h3>
                                            {project.language && (
                                                <span className="shrink-0 text-xs font-mono bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded-full text-sky-400">
                                                    {project.language}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-slate-400 text-sm mb-6 lg:mb-8 flex-grow font-light leading-relaxed">
                                            {project.description || 'No description available for this repository.'}
                                        </p>

                                        <div className="mt-auto pt-5 border-t border-slate-800/50">
                                            <div className="flex flex-row gap-3">
                                                <a
                                                    href={project.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 py-2.5 rounded-xl text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 active:scale-95"
                                                >
                                                    <i className="fab fa-github"></i>
                                                    {project.homepage ? "Code" : "Source"}
                                                </a>
                                                {project.homepage && (
                                                    <a
                                                        href={project.homepage}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 py-2.5 rounded-xl text-sky-400 hover:text-sky-300 text-sm font-medium transition-all duration-300 active:scale-95"
                                                    >
                                                        <i className="fas fa-external-link-alt"></i> Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <AnimateIn>
                            <div className="mt-12 lg:mt-20 flex justify-center w-full">
                                <a
                                    href={`https://github.com/${appConfig.githubUsername}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-slate-700 hover:border-sky-500/50 hover:bg-sky-500/5 px-8 py-4 rounded-full text-white text-base md:text-lg font-medium transition-all duration-300 hover:-translate-y-1 active:scale-95"
                                >
                                    <i className="fab fa-github text-sky-400"></i> View all projects
                                </a>
                            </div>
                        </AnimateIn>
                    </>
                )}
            </div>
        </section>
    );
}