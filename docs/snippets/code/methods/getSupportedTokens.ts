const lancaClient = new LancaClient(config)
const supportedTokens = await lancaClient.getSupportedTokens({
	chainId: '137',
	name: 'Wrapped Ether',
	symbol: 'WETH',
	limit: '10',
})
