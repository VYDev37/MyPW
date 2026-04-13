## My Portfolio Website
Description: Modern Portfolio with **Dark Blue** theme, built with **Next**

## Information
- Demo: [here](https://my-pw-phi.vercel.app/)

## Features
- Integrated Environment: Since this application is built in Next, client and API are integrated
- Responsive Design: Support both mobile and desktop view
- Lightweight and simple: Easy to setup and maintain code
- Type safe: Full TypeScript in Frontend
- Dynamic Project Update: Auto retrieve repository from Github API
- Modern UI/UX: Dark Blue Theme

## Tech Stack
- Frontend: Next.js (React + TypeScript) + TailwindCSS
- Deployment: Vercel
- Package Manager: PNPM / NPM

## Getting started
### Requirements
- Github account
- Git (connected with Github account)
- VSCode (or any code editor)
- pnpm / npm (optional) -> if you would like to build locally first before pushing it to cloud
- Vercel CLI (optional)

### Setup
1. Clone this repository by running `git clone https://github.com/VYDev37/MyPW.git` in terminal or just use VSCode integrated Git
2. Change the part you would like to change in `app/app.config.ts`
3. Create new repository
4. Connect to the repository with `git remote add origin <repo_url>` (or just use integrated Git in VSCode)
5. Add the changed file manually with `git add .` (or just use integrated Git in VSCode) and commit with your message
6. Publish the repo and push the change via Git with `git push -u origin master` (or just use integrated Git in VSCode)
7. Open [Vercel](https://vercel.com)
8. Import Project, then choose the repository you uploaded just now
9. Set the environment variable keys and values, required keys and example value can be seen on `example.env`
10. Deploy
11. Done
