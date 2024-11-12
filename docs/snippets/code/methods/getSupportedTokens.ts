const lanca = new LancaSDK(config)
const supportedTokens = await lanca.getSupportedTokens({
    chainId: '137',
    name: 'Wrapped Ether',
    symbol: 'WETH' 
    limit: '10'
})