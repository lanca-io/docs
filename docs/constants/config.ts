export const GITHUB_REPOSITORIES = {
	MESSAGING_CONTRACTS_V2: {
		BASE_URL: 'https://raw.githubusercontent.com/concero/messaging-contracts-v2/refs/heads/master',
		FILES: {
			TESTNET_DEPLOYMENTS: '/.env.deployments.testnet',
			MAINNET_DEPLOYMENTS: '/.env.deployments.mainnet',
		},
	},
	LBF_CONTRACTS: {
		BASE_URL: 'https://raw.githubusercontent.com/lanca-io/lbf-contracts/refs/heads/master',
		FILES: {
			TESTNET_DEPLOYMENTS: '/.env.deployments.testnet',
			MAINNET_DEPLOYMENTS: '/.env.deployments.mainnet',
		},
	},
	RPCS: {
		SUPPORTED_NETWORKS_URL:
			'https://raw.githubusercontent.com/concero/rpcs/feature/refactor/output/supported-chains.json',
	},
	V2_NETWORKS: {
		NETWORKS_URL: 'https://raw.githubusercontent.com/concero/v2-networks/refs/heads/master/networks',
	},
}

export const LBF_PROXY_CONFIG = {
	VARIABLE_PREFIX: ['CHILD_POOL_PROXY', 'PARENT_POOL_PROXY'],
	ADMIN_SUFFIX: '_ADMIN',
}

export type NetworkEnvironment = 'testnet' | 'mainnet'
