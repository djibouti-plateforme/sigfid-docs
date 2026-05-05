import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SIGFID',
  tagline: 'Système Intégré de Gestion Fiscale de Djibouti',
  favicon: 'img/favicon.ico',

  url: 'https://boubacarDiatta.github.io',
  baseUrl: '/sigfid-docs/',

  organizationName: 'boubacarDiatta',
  projectName: 'sigfid-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/sigfid-social-card.png',
    navbar: {
      title: 'SIGFID Docs',
      logo: {
        alt: 'SIGFID Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'adminSidebar',
          position: 'left',
          label: 'Admin fonctionnel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'agentSidebar',
          position: 'left',
          label: 'Agent des impôts',
        },
        {
          type: 'docSidebar',
          sidebarId: 'contribuableSidebar',
          position: 'left',
          label: 'Contribuable',
        },
        {
          href: 'https://github.com/boubacarDiatta/sigfid-monorepo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'Admin fonctionnel', to: '/admin/intro' },
            { label: 'Agent des impôts', to: '/agent/intro' },
            { label: 'Contribuable', to: '/contribuable/intro' },
          ],
        },
        {
          title: 'Ressources',
          items: [
            { label: 'Code Général des Impôts 2025', href: '#' },
            { label: 'Direction Générale des Impôts', href: '#' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Direction Générale des Impôts — République de Djibouti`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
