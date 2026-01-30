import appConfig from "@/app.config";

export default function About() {
    return (
        <section id="about" className="flex flex-col items-center justify-center bg-gray-950 text-center py-20 px-4 min-h-[80vh]">
            <div className="container mx-12 px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h1 className="font-bold text-4xl mb-3 text-white">About me</h1>
                    <p className="text-gray-200 text-2xl mt-3">{appConfig.role}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start lg:mx-10">
                    <div className="md:col-span-7 space-y-6 text-white">
                        <h3 className="text-start text-3xl font-bold">My Programming Journey</h3>
                        {appConfig.journey.description.map((desc, index) => (
                            <p key={index} className="mt-4 leading-relaxed text-lg text-justify">{desc}</p>
                        ))}
                    </div>
                    <div className="md:col-span-5 space-y-4">
                        {appConfig.journey.cards.map(journey => (
                            <div key={journey.id} className="p-6 mb-3 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:border-sky-500/50 rounded-xl border border-gray-900 bg-slate-900 text-white text-start">
                                <p className="font-bold text-blue-400 mb-2">{journey.title}</p>
                                <p className="text-sm text-gray-400">{journey.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}