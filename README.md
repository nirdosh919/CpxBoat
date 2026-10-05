# CPXBoat

CPXBoat's responsive marketing website for its WhatsApp business communication platform, built with React, TypeScript, and Vite.

## Live website

[https://cpxboat.vercel.app](https://cpxboat.vercel.app)

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npx vite build
npm run preview
```

## Deployment

The site is deployed on Vercel. Production builds use Vite, with SPA route rewrites configured in `vercel.json`.

## Vite and React

This project uses Vite to run React with HMR and Oxlint rules. The official React plugins available for Vite include:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react), which uses Oxc
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses SWC

## React Compiler

The React Compiler is not enabled because of its impact on build performance. To add it, see the [React Compiler installation guide](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

For type-aware linting, install `oxlint-tsgolint` and update `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of available rules.
