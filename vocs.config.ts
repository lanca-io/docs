import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'LancaSDK Docs',
  baseUrl: 'https://docs.lanca.io',
  logoUrl: {
    light: 'logo/lanca/Lanca_logo=whiteBG.svg',
    dark: 'logo/lanca/Lanca_logo=darkBG.svg',
  },
  rootDir: 'docs',
  iconUrl: 'logo/lanca/favicon.ico',
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
