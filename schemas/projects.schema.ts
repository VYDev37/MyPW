import z from "zod";

export const repositorySchema = z.object({
    id: z.number(),
    name: z.string(),
    full_name: z.string(),
    html_url: z.string().url(),
    description: z.string().nullable().optional(),
    fork: z.boolean(),
    homepage: z.string().nullable().optional(),
    stargazers_count: z.number(),
    topics: z.array(z.string()).default([]),
    language: z.string().nullable().optional()
});

export const repositoriesSchema = repositorySchema.array();
export const worksSchema = z.object({
    works: repositoriesSchema
})

export type Repository = z.infer<typeof repositorySchema>;