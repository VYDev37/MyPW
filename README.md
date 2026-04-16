# MyPW - Modern Portfolio Website

A modern, responsive, and highly customizable personal portfolio website. It features a sleek dark blue theme, smooth animations, and dynamic content fetching.

*Live Demo: [vincentdev.site](https://vincentdev.site/)*

## 🚀 Features

- **Modern UI/UX:** Beautiful dark blue theme with seamless layout transitions.
- **Type-Safe:** Fully written in TypeScript for predictable and maintainable code.
- **Dynamic Projects:** Automatically fetches and displays your top repositories directly from the GitHub API.
- **Centralized Configuration:** The `app.config.ts` file allows you to effortlessly update personal info, skills, journey milestones, and links without touching UI components.
- **Responsive Design:** Optimized fluid layouts that look great on both mobile and desktop viewing environments.
- **Integrated Environment:** Client and API seamlessly combined using Next.js App Router for optimal rendering.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** FontAwesome & other custom SVGs
- **Package Manager:** pnpm

*Note: CSS Classes for Custom SVGs could be found on google or you may use my tools [here](https://svg-to-css-kohl.vercel.app).*

## 📂 Project Structure

```text
mypw-next/
├── app/               # Next.js App Router configurations and core pages
├── components/        # Reusable React components (NavBar, Skills, Home)
│   └── animations/    # Custom components for Framer Motion transitions
├── hooks/             # Custom React hooks tailored for the application
├── public/            # Static assets and resources
├── types/             # Custom TypeScript definitions for type-safety
├── app.config.ts      # Main centralized project configuration file
├── package.json       # Project dependencies and script definitions
└── example.env        # Template for local environment variables
```

## ⚙️ Local Development Setup

Follow these exact steps to set up and run the project locally:

1. **Setup `.env.local` by copying `example.env`:**
   ```bash
   cp example.env .env.local
   ```
   *(Ensure you fill in any required environment variables to enable external integrations).*

2. **Install dependencies using `pnpm install`:**
   ```bash
   pnpm install
   ```

3. **Start the development server with `pnpm dev`:**
   ```bash
   pnpm dev
   ```

4. **Test the application at `localhost:3000`:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 📦 Customization & Deployment

To make it your own, open `app.config.ts` and modify your name, descriptions, skillset, navigation links, and GitHub username (`githubUsername`) used for fetching your repository data.

When you're ready to share it with the world, the easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). Import your GitHub repository, configure your environment variables based on `.env.local`, and deploy.
