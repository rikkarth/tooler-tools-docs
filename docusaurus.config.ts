import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tooler Tools',
  tagline: 'A versatile Java library for backend and CLI developers, offering a growing collection of tools to simplify your development tasks.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rikkarth.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rikkarth', // Usually your GitHub org/user name.
  projectName: 'tooler-tools-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: '/api',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/tooler.svg',
    navbar: {
      title: 'Tooler Tools',
      logo: {
        alt: 'Tooler Tools Logo',
        src: 'img/tooler.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'intro',
          label: 'Docs',
        },
        {
          to: '/api/main', 
          position: 'left',
          label: 'API', 
        },
        {
          href: 'https://github.com/rikkarth/tooler-tools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tooler Tools',
          items: [
            {
              label: 'Docs',
              to: '/',
            },
            {
              label: 'API',
              to: '/api/main',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:ricardo.mendes@codeforge.pt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rikkarth/tooler-tools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
