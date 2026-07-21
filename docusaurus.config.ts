import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js — don't use client-side code here (browser APIs, JSX...).

const config: Config = {
  title: 'MyTourbook',
  tagline: 'Visualize and analyze your GPS tours',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // v4 also enables the @docusaurus/faster build optimizations by default.
  future: {
    v4: true,
  },

  // Production URL of the site.
  url: 'https://ziegenberg.github.io',
  // Pathname under which the site is served (GitHub Pages project site).
  baseUrl: '/mytourbook-homepage/',

  // GitHub Pages deployment config.
  organizationName: 'ziegenberg',
  projectName: 'mytourbook-homepage',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ziegenberg/mytourbook-homepage/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ziegenberg/mytourbook-homepage/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Redirect the key Joomla entry points to their new-site homes.
        // The `from` paths are placeholders — the real Joomla URLs arrive with
        // the content migration. Each maps an old entry point to its new home.
        redirects: [
          {from: '/home', to: '/'}, // old home → new home
          {
            from: '/download',
            to: '/',
          }, // old download → home (download CTA links to the latest GitHub Release)
          {from: '/documentation', to: '/docs/'}, // old docs root → new docs root
          {from: '/first-steps', to: '/docs/'}, // old first steps → getting-started doc
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MyTourbook',
      logo: {
        alt: 'MyTourbook logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          href: 'https://github.com/mytourbook/mytourbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Release Notes',
              to: '/blog',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mytourbook/mytourbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MyTourbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
