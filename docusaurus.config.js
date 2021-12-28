module.exports = {
  title: 'Cafe',
  tagline: 'Effectively, First Prototype Based Programming Language on JVM.',
  url: 'https://www.cafe-lang.tech',
  baseUrl: '/cafe-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'cafe-jvm-lang', // Usually your GitHub org/user name.
  projectName: 'cafe-docs', // Usually your repo name.
  themeConfig: {
    image: 'favicon-32x32.png',
    announcementBar: {
      id: 'star_us', // Any value that will identify this message.
      content:
          'If you like Cafe, please give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/cafe-jvm-lang/cafe">GitHub</a> 🎉!',
      backgroundColor: '#79afaafc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    colorMode: {
      defaultMode: 'dark',
    },
    algolia: {
      apiKey: 'fe4db14215eb5761fe2eb059c7a7928c',
      indexName: 'cafe-lang',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Cafe',
        src: '/img/black_logo.svg',
        srcDark: '/img/white_logo.svg',
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
              to: '/docs/fundamentals/'
            },
            {
              label: 'Advanced Guide',
              to: '/docs/advanced/'
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
              to: '/docs/quick-start',
            },
            {
              label: 'Cafe Fundamentals',
              to: '/docs/fundamentals/',
            },
            {
              label: 'Cafe Advanced',
              to: '/docs/advanced/',
            },
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
              label: "Want to share feedback on website? ",
              href: 'https://gitter.im/cafe-jvm-lang/cafe-doc'
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
              label: 'Gitter',
              href: 'https://gitter.im/cafe-jvm-lang/cafe-lang',
            },
            {
              label: 'Talk to Admin',
              href: 'mailto:admin@cafe-lang.tech'
            }
          ],
        },
      ],
      copyright: `<br /> Developed with ❤️ in India | Copyright © ${new Date().getFullYear()} Cafe, Inc.`,
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
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/cafe-jvm-lang/cafe-docs/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
