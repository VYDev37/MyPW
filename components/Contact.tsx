import appConfig from "@/app.config";
import { AnimateIn } from "@/components/animations";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center bg-slate-950 py-16 lg:py-32 px-6 md:px-12 lg:px-24 border-t border-slate-900 min-h-[40vh]">
            <div className="text-center w-full max-w-md mx-auto">
                <AnimateIn>
                    <h2 className="font-bold text-white text-3xl md:text-4xl mb-3 tracking-tight">Find me</h2>
                    <p className="text-slate-400 text-lg md:text-xl font-light mb-8 lg:mb-10">Let's get connected!</p>

                    <div className="flex flex-row justify-center w-full">
                        <a
                            href={appConfig.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/40 border border-slate-800 rounded-full transition-all duration-300 hover:border-sky-500/50 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.2)] hover:-translate-y-1 active:scale-95"
                        >
                            <i className="fab fa-linkedin text-2xl text-slate-400 group-hover:text-sky-400 transition-colors"></i>
                            <span className="text-slate-300 font-medium group-hover:text-white transition-colors text-lg">LinkedIn</span>
                        </a>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}