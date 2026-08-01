const ownerName = "Vincent Yu";
const ownerRole = "Full-stack Developer";

const appConfig = {
    // Layout settings
    baseSite: "https://vincentdev.site",
    webTitle: `${ownerName} | ${ownerRole}`,

    // Home page
    ownerName: ownerName,
    ownerRole: ownerRole,
    ownerDescription: "I build web applications with Next.js and Go, focusing on clean architecture, performance, and shipping things that actually work.",

    // Links
    linkedinUrl: "https://www.linkedin.com/in/vincent-yu-4048b7363/",
    blogUrl: "https://blog.vincentdev.site",

    // 'About' page
    personalRole: "Self-taught full-stack developer",
    journey: {
        cards: [
            {
                title: "Frontend",
                desc: "Started with plain HTML/CSS, picked up React, and now I mainly work with Next.js, shadcn/ui, and Tailwind CSS. I enjoy building interfaces that are fast, responsive, and actually pleasant to use."
            },
            {
                title: "Backend",
                desc: "I've built APIs with Express.js, Hono, and Laravel, but these days I'm most excited about Go and Fiber. I like working close to the metal: writing efficient queries, structuring clean architectures, and deploying with Docker."
            },
            {
                title: "Foundations",
                desc: "My programming roots are in C++ and Python through Competitive Programming. That background gave me a strong sense for algorithms and problem-solving, which I carry into every project I build."
            }
        ],
        description: [
            "I got into programming back in 2021, starting with C++ and Python for Competitive Programming. Being self-taught, I've always been the type to learn by building—Discord bots, personal tools, full websites—anything that scratches the itch of curiosity.",
            "Over time, I shifted my focus toward web development. I went from React to Next.js on the frontend, explored multiple backend stacks including Laravel and Express.js, and I'm currently deepening my skills with Go for high-performance services. I genuinely enjoy the process of shipping something real and watching it work in production."
        ]
    },

    // 'Skills' page
    skills: {
        config: [
            {
                title: "Core Technology",
                display: "card",
                items: [
                    {
                        icon: "next-icon bg-gray-200",
                        title: "Next.js",
                        desc: "Enhancing my React expertise by learning Server-Side Rendering (SSR) and optimized file-based routing for better performance."
                    },
                    {
                        icon: "fa-brands fa-typescript",
                        title: "TypeScript",
                        desc: "Progressed from simple scripting to building scalable web applications, currently focusing on type-safety and modern development patterns."
                    },
                    {
                        icon: "tailwind-icon w-6 h-6",
                        title: "TailwindCSS",
                        desc: "Implementing a utility-first approach to build highly customized and performant designs directly within the markup."
                    },
                    {
                        icon: "fab fa-golang text-py-blue",
                        title: "Golang",
                        desc: "Currently exploring Go's powerful concurrency model and performance capabilities for building robust backend services."
                    }
                ]
            },
            {
                title: "Active Backend Stack",
                display: "badge-primary",
                items: [
                    {
                        icon: "fiber-icon w-6 h-6 inline-block bg-white bg-no-repeat bg-center",
                        title: "Go Fiber",
                        desc: "Actively building high-performance REST APIs with Fiber's fast routing and middleware capabilities."
                    },
                    {
                        icon: "gorm-icon w-6 h-6 inline-block bg-contain bg-no-repeat bg-center",
                        title: "GORM",
                        desc: "Actively using GORM with PostgreSQL for seamless ORM operations, complex queries, and auto-migrations."
                    },
                    {
                        icon: "postgresql-icon w-6 h-6 inline-block bg-contain bg-no-repeat bg-center",
                        title: "PostgreSQL"
                    },
                    {
                        icon: "supabase-icon",
                        title: "Supabase"
                    }
                ]
            },
            {
                title: "Infrastructure & Deployment",
                display: "badge-primary",
                items: [
                    {
                        icon: "fab fa-git text-yellow-400",
                        title: "Git & Github"
                    },
                    {
                        icon: "fab fa-docker",
                        title: "Docker",
                        desc: "Comfortable with containerization basics: writing Dockerfiles, managing containers, and using Docker Compose for local development."
                    },
                    {
                        icon: "vercel-icon",
                        title: "Vercel",
                        desc: "Automated deployments via Git integration for frontend apps."
                    },
                    {
                        icon: "fas fa-c",
                        title: "Coolify",
                        desc: "Hands-on experience deploying full-stack apps on VPS with automatic SSL and CI/CD pipelines."
                    }
                ]
            },
            {
                title: "Tools & UI Libraries",
                display: "badge-secondary",
                items: [
                    {
                        icon: "fab fa-node",
                        title: "Node.js"
                    },
                    {
                        icon: "pnpm-icon w-6 h-6",
                        title: "pnpm"
                    },
                    {
                        icon: "drizzle-icon",
                        title: "Drizzle"
                    },
                    {
                        icon: "shadcn-icon",
                        title: "Shadcn/ui"
                    }
                ]
            },
            {
                title: "Familiar with / Previous Experience",
                display: "badge-secondary",
                items: [
                    {
                        icon: "fab fa-php text-indigo-500",
                        title: "PHP"
                    },
                    {
                        icon: "fab fa-laravel text-red-500",
                        title: "Laravel"
                    },
                    {
                        icon: "fab fa-js text-yellow-400",
                        title: "JavaScript"
                    },
                    {
                        icon: "fab fa-python text-py-blue",
                        title: "Python"
                    },
                    {
                        icon: "mysql-icon inline-block bg-white bg-no-repeat bg-center",
                        title: "MySQL"
                    },
                    {
                        icon: "express-icon bg-yellow-400",
                        title: "Express.js"
                    },
                    {
                        icon: "mongodb-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "MongoDB"
                    },
                    {
                        icon: "fab fa-html5 text-orange-600",
                        title: "HTML5"
                    },
                    {
                        icon: "fab fa-css text-py-blue",
                        title: "CSS3"
                    },
                    {
                        icon: "cpp-icon text-py-blue w-8 h-8",
                        title: "C/C++"
                    },
                    {
                        icon: "hono-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "Hono"
                    }
                ]
            },
            {
                title: "Soft Skills",
                display: "badge-secondary",
                items: [
                    {
                        icon: "fas fa-crown pt-[6px] w-8 h-8 text-yellow-500",
                        title: "Leadership"
                    },
                    {
                        icon: "fas fa-comments pt-[6px] w-8 h-8",
                        title: "Communication"
                    },
                    {
                        icon: "fas fa-people-group pt-[6px] w-8 h-8",
                        title: "Teamwork"
                    },
                    {
                        icon: "fas fa-lightbulb pt-[6px] w-8 h-8",
                        title: "Problem Solving"
                    },
                    {
                        icon: "fas fa-sync pt-[6px] w-8 h-8",
                        title: "Adaptability"
                    },
                    {
                        icon: "fas fa-handshake pt-[6px] w-8 h-8",
                        title: "Responsibility"
                    }
                ]
            },
            {
                title: "Languages",
                display: "badge-secondary",
                items: [
                    {
                        icon: "fas fa-globe pt-[6px] w-8 h-8",
                        title: "English"
                    },
                    {
                        icon: "fas fa-language pt-[6px] w-8 h-8",
                        title: "中文 (Written only)"
                    },
                    {
                        icon: "fas fa-flag pt-[6px] w-8 h-8",
                        title: "Bahasa Indonesia"
                    },
                    {
                        icon: "fas fa-language pt-[6px] w-8 h-8",
                        title: "Hokkien"
                    }
                ]
            }
        ]
    },

    // 'My Works' settings
    githubUsername: "VYDev37",
    displayRepoLimit: 10
}

export default appConfig;