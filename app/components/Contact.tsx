import appConfig from "../../app.config";

export default function Contact() {
    return (
        <section id="contact" className="animate-fade-up flex flex-col items-center justify-center bg-slate-950 text-center py-10 px-4 min-h-[40vh]">
            <h1 className="font-bold text-white text-3xl mb-3">Find me</h1>
            <p className="text-gray-200 text-2xl mt-3">Let's get connected!</p>

            <div className="flex flex-row justify-center">
                <div className="md:col-span-10 lg:col-span-4">
                    <div className="text-xl flex items-center mt-5">
                        <a className="mx-auto text-decoration-none text-white transition duration-300 hover:text-sky-400" href={appConfig.linkedinUrl}><i className="fab fa-linkedin"></i>LinkedIn</a>
                    </div>
                </div>
            </div>

        </section>
    )
}