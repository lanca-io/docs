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
  topNav: [
    {
      text: 'Get in touch',
      link: 'mailto:support@concero.io',
    },
  ],
  socials: [
    {
      icon: 'discord',
      link: 'https://discord.gg/lanca',
    },
    {
      icon: 'github',
      link: 'https://github.com/concero',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/concero_io',
    },

  ],
})
