import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "dedecube",
  description: "Comprehensive guides and resources for developing and deploying Dedecube Flutter mobile applications.",
  srcDir: './src',
  lang: 'en-US',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
  },
  srcExclude: ['**/TODO.md'],
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction/'},
      { text: 'Integrations', link: '/integrations/'},       
    ],
    sidebar: [
      {
        text: 'Prologue',
        items: [
          { text: 'Introduction', link: '/introduction/' },
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      {
        text: 'Architecture Concepts',
        items: [
          { text: 'Overview', link: '/architecture-concepts/' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dedecube' },
    ]
  }
})
