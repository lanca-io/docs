import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Supported Chains',
      link: '/supported-chains',
    },
    {
      text: 'Methods',
      link: '/methods',
    },
    {
      text: 'Types',
      link: '/types',
    },
  ],
})
