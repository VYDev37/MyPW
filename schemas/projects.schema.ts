import z from "zod";

export const repositorySchema = z.object({
    name: z.string(),
    description: z.string(),
    html_url: z.string(),
    language: z.string(),
    homepage: z.string(),
    fork: z.boolean(),
    topics: z.array(z.string()),
    stargazers_count: z.number()
});

export const repositoriesSchema = repositorySchema.array();
export type Repository = z.infer<typeof repositorySchema>;