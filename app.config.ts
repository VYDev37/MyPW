const appConfig = {
    // Home page
    ownerName: "Vincent",
    ownerDescription: "I am a full-stack developer working with TypeScript, and currently diving deeper into Next.js and Go for more optimized systems.",

    // 'Contact' page
    linkedinUrl: "https://www.linkedin.com/in/vincent-yu-4048b7363/",

    // 'About' page
    role: "A self-taught full-stack developer",
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
                title: "Tools & Ecosystem",
                display: "badge-primary",
                items: [
                    {
                        icon: "fab fa-react text-py-blue",
                        title: "React"
                    },
                    {
                        icon: "postgresql-icon w-6 h-6 inline-block bg-contain bg-no-repeat bg-center",
                        title: "PostgreSQL"
                    },
                    {
                        icon: "pnpm-icon w-6 h-6",
                        title: "pnpm"
                    },
                    {
                        icon: "fiber-icon w-6 h-6 inline-block bg-white bg-no-repeat bg-center",
                        title: "Go Fiber"
                    },
                    {
                        icon: "gorm-icon w-6 h-6 inline-block bg-contain bg-no-repeat bg-center",
                        title: "GORM"
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
                        icon: "fab fa-git text-yellow-400",
                        title: "Git & Github"
                    },
                    {
                        icon: "vscode-icon",
                        title: "VSCode"
                    },
                    {
                        icon: "fab fa-node",
                        title: "Node.js"
                    },
                    {
                        icon: "supabase-icon",
                        title: "Supabase"
                    },
                    {
                        icon: "vercel-icon",
                        title: "Vercel"
                    }
                ]
            },
            {
                title: "Familiar with / Foundations",
                display: "badge-secondary",
                items: [
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
                        icon: "fab fa-bootstrap text-blue-500",
                        title: "Bootstrap"
                    },
                    {
                        icon: "mongodb-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "MongoDB"
                    },
                    {
                        icon: "hono-icon w-6 h-6 inline-block bg-no-repeat bg-center",
                        title: "Hono"
                    },
                    {
                        icon: "express-icon bg-yellow-400",
                        title: "Express.js"
                    }
                ]
            }
        ]
    },

    // Navbar settings
    navLinks: [
        { label: "Home", ref: "#home" },
        { label: "About", ref: "#about" },
        { label: "Skills", ref: "#skills" },
        { label: "Works", ref: "#works" },
        { label: "Contact", ref: "#contact" }
    ],

    // 'My Works' settings
    githubUsername: "VYDev37",
    displayRepoLimit: 10
}

export default appConfig;