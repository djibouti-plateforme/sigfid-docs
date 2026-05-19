import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SIGFID',
  tagline: 'Système Intégré de Gestion Fiscale de Djibouti',
  favicon: 'img/logo-dgi.png',

  url: 'https://boubacarDiatta.github.io',
  baseUrl: '/sigfid-docs/',

  organizationName: 'boubacarDiatta',
  projectName: 'sigfid-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-DJ',
        path: 'fr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        path: 'en',
      },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  headTags: [
    // Métadonnées institutionnelles
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Direction Générale des Impôts — République de Djibouti',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'SIGFID, fiscalité, Djibouti, DGI, impôts, CGI, TVA, ITS, IBP, déclaration fiscale, contribuable',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    // En-têtes de sécurité applicables côté client (les vrais en-têtes HTTP
    // restent à configurer côté CDN — GitHub Pages ne les supporte pas).
    {
      tagName: 'meta',
      attributes: {
        httpEquiv: 'Content-Security-Policy',
        content:
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-inline'; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com data:; " +
          "img-src 'self' data: https:; " +
          "connect-src 'self'; " +
          "frame-ancestors 'none'; " +
          "base-uri 'self'; " +
          "form-action 'self'",
      },
    },
    {
      tagName: 'meta',
      attributes: {
        httpEquiv: 'X-Content-Type-Options',
        content: 'nosniff',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/boubacarDiatta/sigfid-docs/edit/main/',
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'Documentation officielle du Système Intégré de Gestion Fiscale de Djibouti (SIGFID) — guides pour administrateurs, agents des impôts et contribuables.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'fr_DJ' },
      { property: 'og:site_name', content: 'SIGFID Docs' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    image: 'img/logo-dgi.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        fontFamily: 'Inter, sans-serif',
        themeVariables: {
          primaryColor: '#1769B2',
          primaryTextColor: '#FFFFFF',
          primaryBorderColor: '#0F4A85',
          lineColor: '#4A5568',
          tertiaryColor: '#F4F6FA',
        },
      },
    },
    navbar: {
      title: 'SIGFID Docs',
      logo: {
        alt: 'Direction Générale des Impôts — Ministère du Budget, République de Djibouti',
        src: 'img/logo-dgi.png',
      },
      hideOnScroll: false,
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
          to: '/glossaire',
          label: 'Glossaire',
          position: 'right',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/boubacarDiatta/sigfid-monorepo',
          label: 'GitHub',
          position: 'right',
          'aria-label': 'Dépôt GitHub SIGFID',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Direction Générale des Impôts — Ministère du Budget',
        src: 'img/logo-dgi.png',
        width: 56,
        height: 56,
      },
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
            { label: 'Glossaire fiscal', to: '/glossaire' },
            { label: 'Foire aux questions', to: '/faq' },
            { label: 'Journal des évolutions', to: '/changelog' },
          ],
        },
        {
          title: 'Légal',
          items: [
            { label: 'Code Général des Impôts 2025', href: '#' },
            { label: 'Direction Générale des Impôts', href: '#' },
            {
              label: 'Politique de sécurité',
              href: 'https://github.com/boubacarDiatta/sigfid-docs/blob/main/SECURITY.md',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Direction Générale des Impôts — République de Djibouti. Documentation publiée à des fins d'information et de formation. Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
