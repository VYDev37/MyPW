import { NextResponse } from "next/server";
import { z } from "zod";
import appConfig from "@/app.config";
import { repositoriesSchema } from "@/schemas/projects.schema";

export async function GET() {
    const githubToken = process.env.GITHUB_TOKEN;
    const user = appConfig.githubUsername.toLowerCase();

    try {
        const response = await fetch(
            `https://api.github.com/users/${appConfig.githubUsername}/repos?per_page=50`,
            {
                headers: {
                    Authorization: `Bearer ${githubToken}`,
                    "Accept": "application/vnd.github+json"
                },
                next: { revalidate: 3600 } // 1 hour cache
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch repos" },
                { status: response.status }
            );
        }

        const rawData = await response.json();
        const parsed = repositoriesSchema.safeParse(rawData);
        if (!parsed.success) {
            console.error("Zod validation error:", parsed.error.flatten());
            return NextResponse.json(
                { error: "Invalid data structure from GitHub API" },
                { status: 500 }
            );
        }

        const repos = parsed.data;
        const filteredRepo = repos
            .filter((repo) => !repo.fork)
            .map((repo) => ({
                ...repo,
                language: repo.name.toLowerCase() === user ? "README" : repo.language
            }))
            .sort((a, b) => {
                return (
                    Number(b.name.toLowerCase() === user) - Number(a.name.toLowerCase() === user) ||
                    Number(!!b.homepage) - Number(!!a.homepage) ||
                    b.stargazers_count - a.stargazers_count ||
                    b.topics.length - a.topics.length
                );
            })
            .slice(0, appConfig.displayRepoLimit - 1);

        return NextResponse.json({ works: filteredRepo });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}