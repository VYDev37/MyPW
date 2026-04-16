"use client";

import { useEffect, useState } from "react";
import type { Repository } from "@/types/repo";

const useProjects = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const GetProjects = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/my-works");
            if (!res.ok)
                throw new Error("Failed to retrieve data.");

            const data = await res.json();
            setProjects(data.works);
        } catch (err) {
            console.log(err);
            setProjects([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        GetProjects()
    }, []);

    return { projects, loading };
}

export default useProjects;