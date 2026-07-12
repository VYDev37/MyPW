import z from "zod";

export const skillInfoSchema = z.object({
    title: z.string(),
    icon: z.string(),
    desc: z.string().optional()
});

export const skillListSchema = z.object({
    title: z.string(),
    display: z.enum(["badge-primary", "badge-secondary", "card"]),
    items: skillInfoSchema.array()
});

export type SkillInfo = z.infer<typeof skillInfoSchema>;
export type SkillList = z.infer<typeof skillListSchema>;