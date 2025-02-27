// [!region config]
import { LancaClient } from '@lanca/sdk'
import type { ILancaClientConfig, IChainWithProvider } from '@lanca/sdk'
import { createWalletClient } from 'viem'
import { polygon, base } from 'viem/chains'

const config: ILancaClientConfig = {
    integratorAddress: 'YOUR_INTEGRATOR_ADDRESS',
    feeBps: 1n,
    chains: {
        '137': {
            chain: polygon,
            provider: http(),
        },
        '8453': {
            chain: base,
            provider: http(),
        }
    } as Record<string, IChainWithProvider>,
};
// [!endregion config]

// [!region sdk]
const lancaClient = new LancaClient(config)
// [!endregion sdk]
const supportedChains = await lancaClient.getSupportedChains()
const supportedTokens = await lancaClient.getSupportedTokens({
	chainId: '137',
	symbol: 'WETH',
})

// [!region requestRoute]
const route = await lancaClient.getRoute({
	fromChainId: '137', // polygon
	toChainId: '8453', //  base
	fromToken: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', // USDC
	toToken: '0x4200000000000000000000000000000000000006', //WETH
	amount: '1000000', // 1 USDC in machine-readable format
	fromAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
	toAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
	slippageTolerance: '0.5',
})
// [!endregion requestRoute]

// [!region executeRoute]
const walletClient = createWalletClient({
	chain: polygon,
	transport: custom(window.ethereum!),
})

const executionConfig: IExecutionConfig = {
	switchChainHook: async (chainId: number) => {
		console.log(chainId);
	},
	updateRouteStatusHook: (route: IRouteType) => console.log(route),
};

const routeWithStatus = await lancaClient.executeRoute(route, walletClient, executionConfig)
// [!endregion executeRoute]

// [!region trackRouteStatus]
const routeStatus = await lancaClient.getRouteStatus(
	'0x231b5f78e90bf71996fd65a05c93a0d0fdb562a2cd8eb6944a833c80bae39b3e',
)
// [!endregion trackRouteStatus]
