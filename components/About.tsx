import appConfig from "@/app.config";
import { AnimateIn } from "@/components/animations";

export default function About() {
    return (
        <section id="about" className="flex flex-col items-center justify-center bg-slate-950 py-16 lg:py-32 px-6 md:px-12 lg:px-24 min-h-[80vh]">
            <div className="container max-w-6xl mx-auto w-full">
                <AnimateIn>
                    <div className="text-center mb-12 lg:mb-20">
                        <h2 className="font-bold text-3xl md:text-4xl mb-3 text-white tracking-tight">About me</h2>
                        <p className="text-sky-400 text-lg md:text-xl font-medium">{appConfig.personalRole}</p>
                    </div>
                </AnimateIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-7">
                        <AnimateIn>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-4 lg:mb-6">My Programming Journey</h3>
                                <div className="space-y-4">
                                    {appConfig.journey.description.map((desc, index) => (
                                        <p key={index} className="leading-relaxed text-base md:text-lg text-slate-400 font-light text-justify md:text-left">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </AnimateIn>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
                        {appConfig.journey.cards.map((journey, id) => (
                            <AnimateIn key={id}>
                                <div className="group p-6 lg:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] hover:border-sky-500/30 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.1)]">
                                    <h4 className="font-bold text-sky-400 mb-2 lg:mb-3 text-lg group-hover:text-sky-300 transition-colors">
                                        {journey.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                                        {journey.desc}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}