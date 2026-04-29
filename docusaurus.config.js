// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sharing is Caring',
  tagline: 'Testing, automation, and quality engineering notes by Gaurav Khurana.',
  url: 'https://udzialmeansshare.github.io',
  baseUrl: '/',
  organizationName: 'udzialMeansShare',
  projectName: 'udzialMeansShare.github.io',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Latest Articles',
          blogDescription: 'Articles on software testing, test automation, and quality engineering.',
          routeBasePath: 'blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Sharing is Caring',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs'
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/udzialMeansShare',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Welcome', to: '/'},
            {label: 'Testing', to: '/testing/fundamentals'},
            {label: 'Automation', to: '/automation/playwright'}
          ]
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/udzialMeansShare'}
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gaurav Khurana. Built with Docusaurus.`
    }
  }
};

module.exports = config;
