import { defineConfig } from 'vocs'

export default defineConfig({
	title: 'LancaSDK Docs',
	baseUrl: 'https://docs.lanca.io',
	logoUrl: {
		light: '/logo/lanca/Lanca_logo=whiteBG.svg',
		dark: '/logo/lanca/Lanca_logo=darkBG.svg',
	},
	rootDir: 'docs',
	iconUrl: '/logo/lanca/favicon.ico',
	sidebar: [
		{
			text: 'Lanca bridge',
			collapsed: false,
			items: [
				{
					text: 'Overview',
					link: '/lanca-bridge/overview',
				},
				{
					text: 'Architecture',
					link: '/lanca-bridge/architecture',
				},
				{
					text: 'Interface',
					link: '/lanca-bridge/interface',
				},
				{
					text: 'Deployments',
					link: '/lanca-bridge/deployments',
				}
			]
		},
		{
			text: 'SDK',
			collapsed: false,
			items: [
				{
					text: 'Getting Started',
					link: '/getting-started',
				},
				{
					text: 'Methods',
					link: '/sdk/methods',
				},
				{
					text: 'Types',
					link: '/sdk/types',
				},
			],
		}
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