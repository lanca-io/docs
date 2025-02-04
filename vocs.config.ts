import { defineConfig } from 'vocs'

export default defineConfig({
	title: 'LancaSDK Docs',
	baseUrl: 'https://docs.lanca.io',
	logoUrl: {
		light: 'logo/lanca/Lanca_logo=whiteBG.svg',
		dark: 'logo/lanca/Lanca_logo=darkBG.svg',
	},
	rootDir: '.',
	iconUrl: 'logo/lanca/favicon.ico',
	sidebar: [
		{
			text: 'Getting Started',
			link: '/getting-started',
		},
		{
			text: 'Contract Deployments',
			link: '/deployments',
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
			link: 'mailto:support@lanca.io',
		},
	],
	socials: [
		{
			icon: 'discord',
			link: 'https://discord.gg/lanca',
		},
		{
			icon: 'github',
			link: 'https://github.com/lanca-io',
		},
		{
			icon: 'x',
			link: 'https://x.com/lanca_io',
		},
	],
})
