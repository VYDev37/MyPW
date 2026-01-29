import appConfig from "@/app.config";
import { Repository } from "@/app/types";

import { NextResponse } from "next/server";

export async function GET() {
    const githubToken = process.env.GITHUB_TOKEN;

    const response = await fetch(`https://api.github.com/users/${appConfig.githubUsername}/repos?per_page=${appConfig.repoLimit}`, {
        headers: {
            Authorization: `Bearer ${githubToken}`,
            "Accept": "application/vnd.github+json"
        },
        next: { revalidate: 3600 } // 1 hour cache
    });

    if (!response.ok)
        return NextResponse.json({ error: "Failed to fetch repos" }, { status: response.status });

    const repo: Repository[] = await response.json();
    const filteredRepo = repo.filter(x => !x.fork)

    return NextResponse.json({ works: filteredRepo });
}