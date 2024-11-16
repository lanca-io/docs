// [!region config]
import { LancaSDK, LancaSDKConfig } from '@lanca/sdk'
import { createWalletClient } from 'viem'
import { polygon } from 'viem/chains'

const config: LancaSDKConfig = {
    integratorId: 'YOUR_INTEGRATOR_ID',
    feeTier: 1,
    chains: {
        1: ['https://rpc.ankr.com/eth', 'https://eth.llamarpc.com'],
        137: ['https://polygon.llamarpc.com'],
    },
}
// [!endregion config]

// [!region sdk]
const lanca = new LancaSDK(config)
// [!endregion sdk]
const supportedChains = await lanca.getSupportedChains()
const supportedTokens = await lanca.getSupportedTokens({
    chainId: '137',
    symbol: 'WETH'
})

// [!region requestRoute]
const route = await lanca.getRoute({
    fromChainId: '137', // polygon
    toChainId: '8453', //  base
    fromToken: 'USDC',
    toToken: 'WETH',
    amount: '10',
    slippageTolerance: '0.5',
})
// [!endregion requestRoute]

// [!region executeRoute]
const walletClient = createWalletClient({
    chain: polygon,
    transport: custom(window.ethereum!)
})

const executionConfig: ExecutionConfig = {
    switchChainHook: (chainId: number) => console.log(`chainId: ${chainId}`),
    updateRouteStatusHook: (route: RouteType) => console.log(route)
}

const routeWithStatus = await lanca.executeRoute(route, walletClient, executionConfig)
// [!endregion executeRoute]
// [!region trackRouteStatus]
const routeStatus = await lanca.getRouteStatus('0x231b5f78e90bf71996fd65a05c93a0d0fdb562a2cd8eb6944a833c80bae39b3e')
// [!endregion trackRouteStatus]
