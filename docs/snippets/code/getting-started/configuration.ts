import { type LancaSDKConfig } from '@lanca/sdk'

const config: LancaSDKConfig = {
    integratorAddress: 'YOUR_INTEGRATOR_ADDRESS',
    feeBps: 1,
    chains: {
        1: ['https://rpc.ankr.com/eth', 'https://eth.llamarpc.com'],
        137: ['https://polygon.llamarpc.com'],
    },
}
