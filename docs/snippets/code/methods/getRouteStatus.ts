const lancaClient = new LancaClient(config)
const routeStatus = await lancaClient.getRouteStatus(
	'0x8de5ab492728a8c226b519d061c1b53dfc435aedb3ab2e1c5dfc388a4e9cfdef',
)
