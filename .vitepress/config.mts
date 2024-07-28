import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
  vite: {
    plugins: [
      GitChangelog
      ({ 
              repoURL: () => 'https://github.com/dedecube/mobile-documentation.git', 
            }), 
            GitChangelogMarkdownSection
      (),
    ],
    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ],
    },
  },
  title: "dedecube",
  description: "Comprehensive guides and resources for developing and deploying Dedecube Flutter mobile applications.",
  srcDir: './src',
  lang: 'en-US',
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction/' },
      { text: 'Implementations', link: '/implementations/' },
    ],
    sidebar: [
      {
        text: 'Prologue',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/introduction/' },
        ],
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/getting-started/' },
          { text: 'Xcode', link: '/getting-started/xcode' },
          { text: 'Android Studio', link: '/getting-started/android-studio' },
          { text: 'Homebrew', link: '/getting-started/homebrew' },
          { text: 'Cocoapods', link: '/getting-started/cocoapods' },
          { text: 'Flutter', 
            collapsed: true,
            items: [
              { text: 'Overview', link: '/getting-started/flutter/' },
              { text: 'Install', link: '/getting-started/flutter/install' },
              { text: 'Configuring', link: '/getting-started/flutter/configuring' },
              { text: 'Useful commands', link: '/getting-started/flutter/useful-commands' },
              { text: 'Troubleshooting', link: '/getting-started/flutter/troubleshooting' },
              { text: 'External references', link: '/getting-started/flutter/external-references' }

            ]
          },
          { text: 'Visual Studio Code', link: '/getting-started/visual-studio-code' },
        ]
      },
      {
        text: 'Architecture Concepts',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/architecture/' },
        ]
      },
      {
        text: 'Implementations',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/implementations/' },
          { text: 'Firebase', 
            collapsed: true,
            items: [
              { text: 'Overview', link: '/implementations/firebase/' },
              { text: 'Decryption', link: '/implementations/firebase/decryption' },
              { text: 'Prestage-only access', link: '/implementations/firebase/prestage-only-access' },

            ]
          },
          { text: 'Tutorials', link: '/implementations/tutorials' },
          { text: 'Do and dont\'s', link: '/implementations/do-and-donts' },
          { text: 'Troubleshooting', link: '/implementations/troubleshooting' },
        ]
      },
      {
        text: 'Lint',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/lint/' },
          { text: 'Ignore rules', link: '/lint/ignore-rules' },
        ]
      },
      {
        text: 'Git Flow',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/git-flow/' },
          { text: 'Branch', link: '/git-flow/branch' },
          { text: 'Commit', link: '/git-flow/commit' },
          { text: 'Workflow', link: '/git-flow/workflow' },
          { text: 'FAQ', link: '/git-flow/faq' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dedecube' },
    ], 
    search: {
      provider: 'algolia',
      options: {
        appId: 'EBEA4MLTEY',
        apiKey: '935b5c3a83cfd3c9edd330385c55dff9',
        indexName: 'mobile-dedecube'
      }
    },
  }
}));
