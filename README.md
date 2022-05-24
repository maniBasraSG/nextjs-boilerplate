This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Boilerplate and Starter for Next JS 12+, and TypeScript

🚀 Boilerplate and Starter for Next.js and TypeScript ⚡️ Made with developer experience first:
Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, CSS Modules, PostCSS

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS
  and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier,
  TypeScript, Jest
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- 🚀 Production-ready

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the
file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in
`pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

Open http://localhost:3000 with your favorite browser to see your project.

### Folder Structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder
│   ├── assets                      # Images
├── src
│   ├── components                  # For presentational components
│   ├── flow                        # Additional Next JS Pages component
│   ├── helpers                     # Utility functions
│   ├── styles                      # Styles folder
│   ├── pages                       # Next JS Pages
│   └── store                       # Store Management
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/favicon.ico` your website favicon, you can generate from
  https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). You can create an
optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you
can deploy with any hosting service.
