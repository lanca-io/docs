import { type LancaSDKConfig } from '@lanca/sdk'

const config: LancaSDKConfig = {
    integratorId: 'YOUR_INTEGRATOR_ID',
    feeTier: 1,
    chains: {
        1: ['https://mainnet.infura.io/v3/YOUR_PROJECT_ID'],
        4: ['https://rinkeby.infura.io/v3/YOUR_PROJECT_ID'],
    },
}
