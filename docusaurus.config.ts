import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tooler Tools",
  tagline:
    "A versatile Java library for backend and CLI developers, offering a growing collection of tools to simplify your development tasks.",
  favicon: "img/favicon.ico",

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Tooler-Tools: A versatile Java library for backend and CLI developers, offering a growing collection of tools to simplify your development tasks.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "java, lib, library, tooler-tools, tools, tooler, cli, backend, software, code, developer, development, engineering",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://github.com/rikkarth/tooler-tools",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Tooler-Tools",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Tooler-Tools: A versatile Java library for backend and CLI developers, offering a growing collection of tools to simplify your development tasks.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://streambit.dev/tooler-tools",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "/img/codeForgeImage.jpg",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image:alt",
        content: "Resembling git branching",
      },
    },
  ],

  // Set the production url of your site here
  url: "https://github.com/rikkarth/tooler-tools",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rikkarth", // Usually your GitHub org/user name.
  projectName: "tooler-tools-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/tooler-tools",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    image: "img/tooler.svg",
    navbar: {
      title: "Tooler Tools",
      logo: {
        alt: "Tooler Tools Logo",
        src: "img/tooler.svg",
      },
      items: [
        {
          href: "pathname:///javadoc/",
          position: "left",
          label: "JavaDoc",
        },
        {
          href: "https://github.com/rikkarth/tooler-tools",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tooler Tools",
          items: [
            {
              label: "Home",
              to: "/",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:ricardo.mendes@streambit.dev",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/rikkarth/tooler-tools",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StreamBit - Tooler-Tools`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
