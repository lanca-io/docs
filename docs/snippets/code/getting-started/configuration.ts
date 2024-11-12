import { type LancaSDKConfig } from '@lanca/sdk'

const config: LancaSDKConfig = {
    integratorId: 'YOUR_INTEGRATOR_ID',
    feeTier: 1,
    chains: {
        1: ['https://rpc.ankr.com/eth', 'https://eth.llamarpc.com'],
        137: ['https://polygon.llamarpc.com'],
    },
}
