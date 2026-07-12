const ownerName = "Vincent Yu";
const ownerRole = "Full-stack Developer";

const appConfig = {
    // Layout settings
    baseSite: "https://vincentdev.site",
    webTitle: `${ownerName} | ${ownerRole}`,

    // Home page
    ownerName: ownerName,
    ownerRole: ownerRole,
    ownerDescription: "I am a full-stack developer working with TypeScript, and currently diving deeper into Next.js and Go for more optimized systems.",

    // 'Contact' page
    linkedinUrl: "https://www.linkedin.com/in/vincent-yu-4048b7363/",

    // 'About' page
    personalRole: "A self-taught full-stack developer",
    journey: {
        cards: [
            {
                title: "Frontend Evolution",
                desc: "Building on my curiosity for the web, I progressed from mastering HTML/CSS foundations to architecting responsive interfaces with React. I am currently exploring Next.js and Tailwind CSS to better understand optimized rendering and utility-first design."
            },
            {
                title: "Backend Exploration",
                desc: "My server-side journey began with Express.js, focusing on traditional REST APIs. Seeking better performance and type-safety, I transitioned to Hono and Bun.js, and I'm now challenging myself with Go to understand high-performance system architecture."
            },
            {
                title: "Problem Solving Roots",
                desc: "Derived from my background in C++ and Python for Competitive Programming, I bridge the gap between algorithmic logic and web development. I focus on applying an analytical mindset to mastering new runtimes, databases, and deployment workflows."
            }
        ],
        description: [
            "I started my programming journey in 2021 with C++ and Python for Competitive Programming. Being self-taught, I've always been curious about how things work—from Discord bots to full-scale websites—which eventually led me to focus on web development.",
            "After building foundations with React, I moved to Next.js to explore more optimized and server-side solutions. Now, I'm further challenging myself by learning Go (Golang) to build efficient, structured backend systems. I love the process of learning every day and the satisfaction of turning code into a functional tool in the browser."
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
                        icon: "vercel-icon",
                        title: "Vercel",
                        desc: "Automated deployments via Git integration for frontend apps."
                    },
                    {
                        icon: "fab fa-docker",
                        title: "Docker",
                        desc: "Comfortable with containerization basics: writing Dockerfiles, managing containers, and using Docker Compose for local development."
                    },
                    {
                        icon: "fas fa-c",
                        title: "Coolify",
                        desc: "Hands-on experience deploying full-stack apps on VPS with automatic SSL and CI/CD pipelines."
                    },
                    {
                        icon: "fab fa-git text-yellow-400",
                        title: "Git & Github"
                    }
                ]
            },
            {
                title: "Tools & UI Libraries",
                display: "badge-secondary",
                items: [
                    {
                        icon: "pnpm-icon w-6 h-6",
                        title: "pnpm"
                    },
                    {
                        icon: "shadcn-icon",
                        title: "Shadcn/ui"
                    },
                    {
                        icon: "drizzle-icon",
                        title: "Drizzle"
                    },
                    {
                        icon: "fab fa-node",
                        title: "Node.js"
                    }
                ]
            },
            {
                title: "Familiar with / Previous Experience",
                display: "badge-secondary",
                items: [
                    {
                        icon: "express-icon bg-yellow-400",
                        title: "Express.js"
                    },
                    {
                        icon: "hono-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "Hono"
                    },
                    {
                        icon: "cpp-icon text-py-blue w-8 h-8",
                        title: "C/C++"
                    },
                    {
                        icon: "fab fa-python text-py-blue",
                        title: "Python"
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
                        icon: "fab fa-js text-yellow-400",
                        title: "JavaScript"
                    },
                    {
                        icon: "mongodb-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "MongoDB"
                    },
                    {
                        icon: "mysql-icon inline-block bg-white bg-no-repeat bg-center",
                        title: "MySQL"
                    }
                ]
            },
            {
                title: "Soft Skills",
                display: "badge-secondary",
                items: [
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
                    },
                    {
                        icon: "fas fa-comments pt-[6px] w-8 h-8",
                        title: "Communication"
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