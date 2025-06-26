# Blank NextJS App

This is a modded Next.js default example project to remove the unnecessary initial items and add essential files and components.

Modifications: Ryan Macalandag
Github repo: https://github.com/ryanmacalandag/nextjs-blank
Usage: npx create-next-app@latest --example "https://nextjs.org/docs/app/api-reference/cli/create-next-app" [your-project-name]

Learn more: https://nextjs.org/docs/app/api-reference/cli/create-next-app

### App folder (@/app/)

- page.tsx removed default home page items
- layout.tsx - removed font Geist and added Inter (Google Font)
- global.css - added a few minor custom classes to the Shadcn theme configuration
- favicon.ico - added 😜 as favicon

### Installation Folder (@/installation/)

- holds temporary install files
- InstallSuccess.txs replaces the default Next.js welcome message
- DELETE this folder

### Public Folder (@/public/)

- deleted image files in Public folder (eg vercel.svg, github.svg, etc)

### Components Added (@/components/)

- UI components: Alert, Pills
- Wrappers: PageWrapper, DarkPageWrapper (dark-mode enabled), SectionWrapper, RowWrapper

### Contexts/Providers Added (@/providers)

- AppProviderContext.tsx is the catch-all provider for all top-level app providers
- DarkModeContext.tsx wrapped to allow the dark mode toggle
- ThemeProvider.tsx is a placeholder for theming

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
