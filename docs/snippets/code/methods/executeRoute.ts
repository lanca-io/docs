const lancaClient = new LancaClient(config)
const route = await lancaClient.getRoute({
	fromChainId: '137',
	toChainId: '8453',
	fromToken: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', //WETH
	toToken: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c', //WBTC
	amount: '100000',
})
const routeWithStatus = await lancaClient.executeRoute(route)
