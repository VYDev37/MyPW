import appConfig from "@/app.config";

export default function Skills() {
    const skillCards = appConfig.skills.cards;

    return (
        <section id="skills" className="flex flex-col items-center justify-center items-stretch bg-slate-950 text-center py-20 px-4 min-h-[80vh]">
            <h1 className="font-bold mb-3 text-white text-3xl">Skills & Technologies</h1>
            <p className="text-gray-200 text-2xl mt-3">Technologies & Programming Languages I have used and familiar with:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15 lg:mx-40 items-start">
                {skillCards.map((skill) => (
                    <div key={skill.id} className="p-6 rounded-xl border border-gray-900 bg-slate-900 text-white text-start h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:border-sky-500/50">
                        <div className="flex items-center mb-4">
                            <i className={`text-2xl ${skill.icon}`}></i>
                            <p className="font-bold ms-3">{skill.title}</p>
                        </div>
                        <p className="text-gray-400">{skill.desc}</p>
                    </div>
                ))}
            </div>

        </section>

    )
}