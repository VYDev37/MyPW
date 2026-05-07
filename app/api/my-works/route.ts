import appConfig from "@/app.config";
import type { Repository } from "@/types/repo";

import { NextResponse } from "next/server";

export async function GET() {
    const githubToken = process.env.GITHUB_TOKEN;
    const user = appConfig.githubUsername.toLowerCase();

    const response = await fetch(`https://api.github.com/users/${appConfig.githubUsername}/repos?per_page=50`, {
        headers: {
            Authorization: `Bearer ${githubToken}`,
            "Accept": "application/vnd.github+json"
        },
        next: { revalidate: 3600 } // 1 hour cache
    });

    if (!response.ok)
        return NextResponse.json({ error: "Failed to fetch repos" }, { status: response.status });

    const repo: Repository[] = await response.json();
    const filteredRepo = repo
        .filter(x => !x.fork)
        .map(x => ({
            ...x,
            language: x.name.toLowerCase() === user ? "README" : x.language
        }))
        .sort((a: Repository, b: Repository) => {
            return Number(b.name.toLowerCase() === user) - Number(a.name.toLowerCase() === user)
                || Number(!!b.homepage) - Number(!!a.homepage) || b.stargazers_count - a.stargazers_count || b.topics.length - a.topics.length;
        })
        .slice(0, appConfig.displayRepoLimit - 1);

    return NextResponse.json({ works: filteredRepo });
}