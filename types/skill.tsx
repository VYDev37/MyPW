export interface SkillInfo {
    title: string;
    icon: string;
    desc?: string;
}

export interface SkillList {
    title: string;
    display: "badge-primary" | "badge-secondary" | "card"; // category / priority level
    items: SkillInfo[];
}