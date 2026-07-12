import appConfig from "@/app.config";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { type SkillInfo } from "@/schemas/skills.schema";

const SkillCard = ({ skill }: { skill: SkillInfo }) => (
    <div className="group flex flex-col h-full p-5 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] hover:border-sky-500/30 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.1)]">
        <div className="flex items-center mb-3 sm:mb-4 gap-3 sm:gap-4">
            <i className={`text-2xl sm:text-3xl text-sky-400 transition-transform duration-300 group-hover:scale-110 ${skill.icon}`}></i>
            <h4 className="font-semibold text-lg sm:text-xl text-white group-hover:text-sky-100 transition-colors">
                {skill.title}
            </h4>
        </div>
        {skill.desc && (
            <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                {skill.desc}
            </p>
        )}
    </div>
);

const PrimaryBadge = ({ skill }: { skill: SkillInfo }) => (
    <div className="group flex w-full items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-white transition-all duration-300 hover:border-sky-500 hover:bg-slate-800 hover:-translate-y-1 active:scale-95 cursor-default">
        <i className={`text-xl sm:text-2xl text-sky-400 transition-transform duration-300 group-hover:scale-110 w-6 text-center ${skill.icon}`}></i>
        <span className="font-medium text-sm sm:text-base tracking-wide truncate">{skill.title}</span>
    </div>
);

const SecondaryBadge = ({ skill }: { skill: SkillInfo }) => (
    <div className="flex w-full items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-lg border border-slate-800/80 bg-slate-900/30 text-slate-400 transition-colors duration-300 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-800/50 active:scale-95 cursor-default">
        <i className={`text-lg sm:text-xl opacity-70 w-5 text-center ${skill.icon}`}></i>
        <span className="text-xs sm:text-sm truncate">{skill.title}</span>
    </div>
);

export default function Skills() {
    const skillCategories = appConfig.skills.config;

    return (
        <section id="skills" className="flex flex-col items-center bg-slate-950 py-16 lg:py-32 px-5 md:px-12 lg:px-24 min-h-[80vh]">
            <div className="container max-w-5xl mx-auto w-full">
                <AnimateIn>
                    <div className="text-center mb-14 sm:mb-20 lg:mb-24">
                        <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white tracking-tight">Skills & Technologies</h2>
                        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            A structured overview of the technologies I utilize to build modern applications, categorized by proficiency and usage.
                        </p>
                    </div>
                </AnimateIn>

                {skillCategories.map((category, index) => {
                    const isCard = category.display === 'card';
                    const isPrimary = category.display === 'badge-primary';
                    const isSecondary = category.display === 'badge-secondary';
                    const headingStyle = isCard
                        ? "text-xl sm:text-2xl text-white border-b border-slate-800 pb-3 sm:pb-4"
                        : isPrimary
                            ? "text-lg sm:text-xl text-white"
                            : "text-base sm:text-lg text-slate-400";

                    const numberColor = isCard ? "text-sky-400" : "text-slate-500";
                    return (
                        <div key={index} className="mb-14 sm:mb-16 lg:mb-20 last:mb-0 w-full">
                            <AnimateIn>
                                <h3 className={`font-bold mb-5 sm:mb-6 ${headingStyle}`}>
                                    <span className={`${numberColor} mr-2 font-mono text-sm sm:text-base`}>
                                        0{index + 1}.
                                    </span>
                                    {category.title}
                                </h3>
                            </AnimateIn>

                            {isCard && (
                                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
                                    {category.items.map((skill, id) => (
                                        <StaggerItem key={id}><SkillCard skill={skill} /></StaggerItem>
                                    ))}
                                </StaggerContainer>
                            )}

                            {isPrimary && (
                                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                                    {category.items.map((skill, id) => (
                                        <StaggerItem key={id}><PrimaryBadge skill={skill} /></StaggerItem>
                                    ))}
                                </StaggerContainer>
                            )}

                            {isSecondary && (
                                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                                    {category.items.map((skill, id) => (
                                        <StaggerItem key={id}><SecondaryBadge skill={skill} /></StaggerItem>
                                    ))}
                                </StaggerContainer>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}