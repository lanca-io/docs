import { defineConfig } from 'vocs'

export default defineConfig({
	title: 'Lanca Docs',
	titleTemplate: '%s – Lanca Docs',
	baseUrl: 'https://docs.lanca.io',
	description: 'Lanca Bridge Documentation',
	logoUrl: {
		light: '/logo/lanca/Lanca_logo=whiteBG.svg',
		dark: '/logo/lanca/Lanca_logo=darkBG.svg',
	},
	editLink: {
		pattern: 'https://github.com/lanca-io/docs/edit/master/docs/pages/:path',
		text: 'Suggest changes to this page',
	},
	rootDir: 'docs',
	iconUrl: '/logo/lanca/favicon.ico',
	sidebar: [
		{
			text: 'Introduction to Lanca Bridging Framework (LBF)',
			collapsed: true,
			items: [
				{
					text: 'What is LBF?',
					link: '/introduction/what-is-lbf',
				},
				{
					text: 'How LBF Works?',
					link: '/introduction/how-lbf-works',
				},
				{
					text: 'What Benefits Does LBF Bring?',
					link: '/introduction/key-benefits',
				}
			],
		},
		{
			text: 'V1',
			collapsed: false,
			items: [
				{
					text: 'Lanca Bridge',
					collapsed: true,
					items: [
						{
							text: 'Overview',
							link: '/v1/lanca-bridge/overview',
						},
						{
							text: 'Architecture',
							link: '/v1/lanca-bridge/architecture',
						},
						{
							text: 'Interface',
							link: '/v1/lanca-bridge/interface',
						},
						{
							text: 'Deployments',
							link: '/v1/lanca-bridge/deployments',
						},
					],
				},
				{
					text: 'SDK',
					collapsed: true,
					items: [
						{
							text: 'Get Started',
							link: '/getting-started',
						},
						{
							text: 'Methods',
							link: '/v1/sdk/methods',
						},
						{
							text: 'Types',
							link: '/v1/sdk/types',
						},
					],
				},
			],
		},
		{
			text: 'Lanca Bridging Framework',
			collapsed: false,
			items: [
				{
					text: 'Architecture',
					link: '/lbf/architecture',
				},
				{
					text: 'Glossary',
					link: '/lbf/glossary',
				},
				{
					text: 'Interface',
					link: '/lbf/interface',
				},
			],
		},
		{
			text: 'Lanca Canonical Bridge',
			collapsed: false,
			items: [
				{
					text: 'Overview',
					link: '/lanca-canonical-bridge/overview',
				},
				{
					text: 'Architecture',
					link: '/lanca-canonical-bridge/architecture',
				},
			],
		},
	],
	topNav: [
		{
			text: 'LBF Whitepaper',
			link: 'https://concero.io/lanca_whitepaper.pdf',
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
