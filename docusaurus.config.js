module.exports = {
  title: 'Cafe',
  tagline: 'Effectively, first prototype based programming language on JVM.',
  url: 'https://cafe-jvm-lang.github.io',
  baseUrl: '/cafe-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'cafe-jvm-lang', // Usually your GitHub org/user name.
  projectName: 'cafe-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Cafe',
        src: 'img/black_logo.svg',
        srcDark: 'img/white_logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Let\'s Start',
              to: '/docs/quick-start'
            },
            {
              label: 'The Basics',
              to: '/docs/fundamentals'
            },
            {
              label: 'Advanced Guide',
              to: '/docs/prototypes'
            }
          ]
        },
        {
          href: 'https://github.com/cafe-jvm-lang/cafe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DOCS',
          items: [
            {
              label: "Let's Start",
              to: 'docs/',
            },
            {
              label: 'Cafe Fundamentals',
              to: 'docs/cafe-fundamentals/',
            },
            {
              label: 'Cafe Advanced',
              to: 'docs/prototypes/',
            },
            // {
            //   label: 'Functional Programming',
            //   to: 'docs/functional-programming/',
            // },
            // {
            //   label: 'Modular Programming',
            //   to: 'docs/modular-programming/',
            // },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Ask for a Feature?',
              href: 'https://gitter.im/cafe-jvm-lang/cafe-lang',
            },
            {
              label: "Want to share feedback on docs? ",
              href: 'https://gitter.im/cafe-jvm-lang/cafe-doc'
            },
            {
              label: 'Contributor Guide',
              href: 'https://github.com/cafe-jvm-lang/cafe/blob/master/README.md',
            },
          ],
        },
        {
          title: 'FIND US',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cafe-jvm-lang/cafe',
            },
            {
              label: 'Twitter',
              href: 'https://github.com/cafe-jvm-lang/cafe-docs',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cafe Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cafe-jvm-lang/cafe-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cafe-jvm-lang/cafe-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
