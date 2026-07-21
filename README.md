# MyTourbook homepage

The marketing and documentation website for the [MyTourbook](https://github.com/mytourbook/mytourbook) desktop application, built with [Docusaurus](https://docusaurus.io/) 3 + TypeScript and managed with [pnpm](https://pnpm.io/).

## Prerequisites

- Node.js ≥ 20
- pnpm (see `packageManager` in `package.json`)

## Installation

```bash
pnpm install
```

## Local development

```bash
pnpm start
```

Starts a local dev server and opens the site in a browser. Most changes are reflected live.

## Production build

```bash
pnpm build
```

Generates the static site into `build/`. Test it locally with:

```bash
pnpm serve
```

## Typechecking

```bash
pnpm typecheck
```

## Quality

The project ships a structural quality gate that runs before every `pnpm build`
(see the `prebuild` script). It covers ESLint (TypeScript flat config), Prettier
formatting checks, and markdownlint (relaxed for MDX). cspell spell-checking is
advisory and never blocks a build.

```bash
pnpm lint        # structural gate: ESLint + Prettier --check + markdownlint (runs before `pnpm build`)
pnpm format      # apply formatting: Prettier --write + markdownlint --fix
pnpm test:spell  # advisory spell-check (en-GB, non-blocking)
```

The build fails fast on the first structural violation, so broken MDX, lint
errors, or formatting drift never reach the deployed site.

## Project layout

```text
docs/           Documentation pages (MDX)
blog/           Release notes — one blog post per MyTourbook release (MDX)
src/            Theme overrides, pages, and global CSS
static/         Static assets (logo, favicon)
docusaurus.config.ts   Site configuration
sidebars.ts     Docs sidebar definition
```
