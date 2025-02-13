import { type ILancaClientConfig } from '@lanca/sdk'

const config: ILancaClientConfig = {
	integratorAddress: 'YOUR_INTEGRATOR_ADDRESS',
	feeBps: 1,
	chains: {
		1: ['https://rpc.ankr.com/eth', 'https://eth.llamarpc.com'],
		137: ['https://polygon.llamarpc.com'],
	},
}
