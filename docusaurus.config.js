// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gaurav Khurana',
  tagline: 'Senior Test Consultant at Microsoft focused on automation and quality strategy.',
  url: 'https://udzialmeansshare.github.io',
  baseUrl: '/',
  organizationName: 'udzialMeansShare',
  projectName: 'udzialMeansShare.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
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
        docs: false,
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
    navbar: {
      title: 'Gaurav Khurana',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/profile', label: 'Profile', position: 'left'}
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright ${new Date().getFullYear()} Gaurav Khurana`
    }
  }
};

module.exports = config;
