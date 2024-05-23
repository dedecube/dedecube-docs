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
          { text: 'Xcode', link: '/getting-started/xcode' },
          { text: 'Android Studio', link: '/getting-started/android-studio' },
          { text: 'Homebrew', link: '/getting-started/homebrew' },
          { text: 'Cocoapods', link: '/getting-started/cocoapods' },
          { text: 'Flutter', link: '/getting-started/flutter' },
          { text: 'Visual Studio Code', link: '/getting-started/visual-studio-code' },
        ]
      },
      {
        text: 'Architecture Concepts',
        items: [
          { text: 'Overview', link: '/architecture/' },
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Introduction', link: '/integrations/' },
          { text: 'Tutorials', link: '/integrations/tutorials' },
          { text: 'Do and dont\'s', link: '/integrations/do-and-donts' },
          { text: 'Troubleshooting', link: '/integrations/troubleshooting' },
        ]
      },
      {
        text: 'Lint',
        items: [
          { text: 'Overview', link: '/lint/overview' },
        ]
      },
      {
        text: 'Git Flow',
        items: [
          { text: 'Overview', link: '/git-flow/' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dedecube' },
    ]
  }
})
