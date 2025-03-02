import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import linkTransformer from "./src/remark/link-transformer";

const config: Config = {
  title: "FlightDocs",
  tagline: "Open-source pilot reference and ground school content",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://flightdocs.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eburlingame", // Usually your GitHub org/user name.
  projectName: "flightdocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [linkTransformer],
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/eburlingame/flightdocs/tree/master/src",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "FlightDocs",
      logo: {
        alt: "Flightdocs Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "allSidebar",
          position: "left",
          label: "All Topics",
        },
        {
          type: "docSidebar",
          sidebarId: "cfiSidebar",
          position: "left",
          label: "CFI",
        },
        {
          type: "docSidebar",
          sidebarId: "ifrSidebar",
          position: "left",
          label: "IFR",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Welcome",
              to: "/docs",
            },
            {
              label: "Docs",
              to: "/docs",
            },
          ],
        },
        {
          title: "Contribute",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/eburlingame/flightdocs",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
