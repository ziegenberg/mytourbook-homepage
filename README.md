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

## Project layout

```
docs/           Documentation pages (MDX)
blog/           Release notes — one blog post per MyTourbook release (MDX)
src/            Theme overrides, pages, and global CSS
static/         Static assets (logo, favicon)
docusaurus.config.ts   Site configuration
sidebars.ts     Docs sidebar definition
```
