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
                id: 1,
                title: "Frontend Evolution",
                desc: "Building on my curiosity for the web, I progressed from mastering HTML/CSS foundations to architecting responsive interfaces with React. I am currently exploring Next.js and Tailwind CSS to better understand optimized rendering and utility-first design."
            },
            {
                id: 2,
                title: "Backend Exploration",
                desc: "My server-side journey began with Express.js, focusing on traditional REST APIs. Seeking better performance and type-safety, I transitioned to Hono and Bun.js, and I'm now challenging myself with Go to understand high-performance system architecture."
            },
            {
                id: 3,
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
        cards: [
            {
                id: 1,
                icon: "cpp-icon text-py-blue",
                title: "C/C++",
                desc: "My foundational gateway into programming. I use it to explore algorithmic challenges, competitive programming, and the core principles of memory management."
            },
            {
                id: 2,
                icon: "fab fa-python text-py-blue",
                title: "Python",
                desc: "Evolved from a tool for bot automation into a versatile language for academic projects and exploring basic data processing in my college journey."
            },
            {
                id: 3,
                icon: "fab fa-html5 text-orange-600",
                title: "HTML5",
                desc: "The essential backbone of my web projects, focused on writing semantic and accessible structures for a better user experience."
            },
            {
                id: 4,
                icon: "fab fa-css text-py-blue",
                title: "CSS3",
                desc: "Exploring modern styling techniques, responsive layouts, and smooth transitions to create visually engaging and user-friendly interfaces."
            },
            {
                id: 5,
                icon: "fab fa-bootstrap text-blue-500",
                title: "Bootstrap",
                desc: "A reliable CSS framework I utilize for rapid prototyping and ensuring cross-browser consistency with proven UI components."
            },
            {
                id: 6,
                icon: "tailwind-icon w-6 h-6",
                title: "TailwindCSS",
                desc: "Implementing a utility-first approach to build highly customized and performant designs directly within the markup."
            },
            {
                id: 7,
                icon: "fab fa-js text-yellow-400",
                title: "JavaScript & TypeScript",
                desc: "Progressed from simple scripting to building scalable web applications, currently focusing on type-safety and modern development patterns."
            },
            {
                id: 8,
                icon: "fab fa-react text-py-blue",
                title: "React",
                desc: "My primary library for building component-based Single Page Applications (SPA), emphasizing reusability and efficient state management."
            },
            {
                id: 9,
                icon: "fas fa-database text-yellow-400",
                title: "Database",
                desc: "Experienced with MongoDB and PostgreSQL, currently deepening my understanding of relational schemas for better data integrity."
            },
            {
                id: 10,
                icon: "express-icon bg-yellow-400",
                title: "Express.js",
                desc: "Developing RESTful APIs with a focus on clean routing, secure middleware implementation, and efficient server-side logic."
            },
            {
                id: 11,
                icon: "fab fa-git text-yellow-400",
                title: "Git",
                desc: "Utilizing version control as a standard practice for maintaining organized codebases and facilitating seamless collaboration."
            },
            {
                id: 12,
                icon: "vscode-icon",
                title: "Visual Studio Code",
                desc: "My preferred integrated development environment, customized with a tailored workflow to boost coding efficiency."
            },
            {
                id: 13,
                icon: "fab fa-golang text-py-blue",
                title: "Go",
                desc: "Currently exploring Go's powerful concurrency model and performance capabilities for building robust backend services."
            },
            {
                id: 14,
                icon: "next-icon bg-gray-200",
                title: "Next.js",
                desc: "Enhancing my React expertise by learning Server-Side Rendering (SSR) and optimized file-based routing for better performance."
            },
            {
                id: 15,
                icon: "supabase-icon",
                title: "Supabase",
                desc: "Leveraging this Backend-as-a-Service (BaaS) to integrate real-time databases and authentication into my projects efficiently."
            },
            {
                id: 16,
                icon: "vercel-icon",
                title: "Vercel",
                desc: "My go-to platform for automated deployment and high-performance hosting, ensuring fast delivery through a global edge network."
            }
        ]
    },

    // Navbar settings
    navLinks: [
        { id: 1, label: "Home", ref: "#home" },
        { id: 2, label: "About", ref: "#about" },
        { id: 3, label: "Skills", ref: "#skills" },
        { id: 4, label: "Works", ref: "#works" },
        { id: 5, label: "Contact", ref: "#contact" }
    ],

    // 'My Works' settings
    githubUsername: "VYDev37",
    displayRepoLimit: 9
}

export default appConfig;