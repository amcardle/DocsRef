// Note: type annotations allow type checking and IDEs autocompletion


const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid')
return {
  title: `Docsref ${process.env.CF_PAGES_BRANCH == "beta" ? "beta" : ""}`,
  tagline: `Docsref ${process.env.CF_PAGES_BRANCH == "beta" ? "beta" : ""}`,
  url: 'https://Docsref.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [mdxMermaid.default],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/Peradine/Docsref/edit/${process.env.CF_PAGES_BRANCH}/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `Docsref ${process.env.CF_PAGES_BRANCH == "beta" ? "beta" : ""}`,
        logo: {
          alt: 'Docsref',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Peradine/Docsref',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Docsref, <a href="https://github.com/Peradine/Docsref/blob/main/LICENSE.txt"> CC-BY-SA-4.0 license</a>
        </br> No guarantee is made that this information is correct or accurate
        </br> Commit <a href=${"https://github.com/Peradine/Docsref/commit/" + process.env.CF_PAGES_COMMIT_SHA}>${String(process.env.CF_PAGES_COMMIT_SHA).substring(0, 5)}</a> on branch ${process.env.CF_PAGES_BRANCH}
        </br> <small>${Date()}</small>`,
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
            ],
          },
          {

          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Peradine/Docsref',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [require.resolve("@cmfcmf/docusaurus-search-local"),
    {
      indexDocSidebarParentCategories: 2,
    }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
}};
module.exports = createConfig;
