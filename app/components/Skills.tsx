import appConfig from "@/app.config";

export default function Skills() {
    const skillCards = appConfig.skills.cards;

    return (
        <section id="skills" className="animate-fade-up flex flex-col items-center justify-center bg-slate-950 text-center py-20 px-4 min-h-[80vh]">
            <h1 className="font-bold mb-3 text-white text-3xl">Skills & Technologies</h1>
            <p className="text-gray-200 text-2xl mt-3">Technologies & Programming Languages I have used and familiar with:</p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-15 lg:mx-40">
                <div className="md:col-span-10 lg:col-span-6"> {/* Large / lg = for pc/desktop view, medium / md for phone? */}
                    {skillCards.slice(0, Math.ceil(skillCards.length / 2)).map(skill => (
                        <div key={skill.id} className="p-6 mb-3 rounded-xl border border-gray-900 bg-slate-900 text-white text-start">
                            <div className="flex">
                                <i className={`text-2xl ${skill.icon}`}></i>
                                <p className="font-bold ms-2 mb-5">{skill.title}</p>
                            </div>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="md:col-span-10 lg:col-span-6 ms-4"> 
                    {skillCards.slice(Math.ceil(skillCards.length / 2)).map(skill => (
                        <div key={skill.id} className="p-6 mb-3 rounded-xl border border-gray-900 bg-slate-900 text-white text-start">
                            <div className="flex">
                                <i className={`text-2xl ${skill.icon}`}></i>
                                <p className="font-bold ms-2 mb-5">{skill.title}</p>
                            </div>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}