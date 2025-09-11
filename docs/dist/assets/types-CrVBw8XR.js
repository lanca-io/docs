import{u as s,j as e}from"./index-DvXItYxz.js";const o={title:"Data Types",description:"undefined"};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"data-types",children:["Data Types",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#data-types",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"types",children:["Types",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"rpcconfig",children:[e.jsx(n.code,{children:"RpcConfig"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpcconfig",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A type representing a configuration for RPC."}),`
`,e.jsx(n.p,{children:"Type"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Record<string, IChainWithProvider>"}),"- an object with chain IDs as keys and either arrays of RPC URLs or fallback transport configurations (from viem) as values. This structure allows for flexible and efficient management of RPC connections across multiple blockchain networks."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"switchchainhook",children:[e.jsx(n.code,{children:"SwitchChainHook"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#switchchainhook",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A type representing a hook function that switches the blockchain chain."}),`
`,e.jsx(n.p,{children:"Type"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(chainId: number) => Promise<WalletClient | undefined | void>"}),"- a function that takes a chain ID as an argument and returns a promise that resolves to a ",e.jsx(n.code,{children:"WalletClient"})," object, ",e.jsx(n.code,{children:"undefined"}),", or ",e.jsx(n.code,{children:"void"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["This hook is used to switch the blockchain chain and retrieve a ",e.jsx(n.code,{children:"WalletClient"})," object for the new chain. The hook function should handle the chain switching logic and return a promise that resolves to the ",e.jsx(n.code,{children:"WalletClient"})," object,",e.jsx(n.code,{children:"undefined"})," or ",e.jsx(n.code,{children:"void"})," if the chain switching fails."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"updateroutehook",children:[e.jsx(n.code,{children:"UpdateRouteHook"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#updateroutehook",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A type representing a hook function that updates the route execution state."}),`
`,e.jsx(n.p,{children:"Type"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(executionState: IRouteType) => void"}),"- a function that takes the current execution state of the route as an argument and updates the route execution state accordingly."]}),`
`]}),`
`,e.jsx(n.p,{children:"This hook is used to update the route execution state in real-time, allowing for dynamic changes to the route execution process. The hook function should handle the logic for updating the route execution state based on the provided execution state."}),`
`,e.jsxs(n.h2,{id:"interfaces",children:["Interfaces",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interfaces",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"ichainwithprovider",children:[e.jsx(n.code,{children:"IChainWithProvider"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ichainwithprovider",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing the object with chain and provider."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chain"}),": ",e.jsx(n.code,{children:"Chain"})," - an object representing the chain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"provider?"}),": ",e.jsx(n.code,{children:"Transport"})," - a transport configuration for the RPC connection."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iexecutionconfig",children:[e.jsx(n.code,{children:"IExecutionConfig"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iexecutionconfig",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing the configuration for the execution of a route."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"switchChainHook?"}),": ",e.jsx(n.code,{children:"SwitchChainHook"})," - a hook function that switches the blockchain chain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"updateRouteStatusHook?"}),": ",e.jsx(n.code,{children:"UpdateRouteHook"})," - a hook function that updates the route execution state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"txLink?"}),": ",e.jsx(n.code,{children:"string"})," - a link to the transaction."]}),`
`]}),`
`,e.jsxs(n.p,{children:["This configuration object is used to customize the execution of a route. The ",e.jsx(n.code,{children:"switchChainHook"})," property allows for custom chain switching logic, while the ",e.jsx(n.code,{children:"updateRouteStatusHook"})," property enables real-time updates to the route execution state. The ",e.jsx(n.code,{children:"txLink"})," property provides a link to the transaction for easy access."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ilancaclientconfig",children:[e.jsx(n.code,{children:"ILancaClientConfig"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ilancaclientconfig",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a configuration for LancaClient."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"integratorAddress?"}),": ",e.jsx(n.code,{children:"Address"})," - integrator address."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"feeBps?"}),": ",e.jsx(n.code,{children:"number"})," - fee tier."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chains?"}),": ",e.jsx(n.code,{children:"RpcConfig"})," - configuration for the supported blockchain networks. This property is optional and allows users to specify the RPC (Remote Procedure Call) settings for different chains that the client will interact with. Proper configuration of this property ensures that the client can communicate effectively with the desired blockchain networks."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ilancatoken",children:[e.jsx(n.code,{children:"ILancaToken"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ilancatoken",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a token in a blockchain."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address"}),": ",e.jsx(n.code,{children:"Address"})," - the unique address of the token on the blockchain. This is the contract address that identifies the token and is used for transactions and interactions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chainId"}),": ",e.jsx(n.code,{children:"string"})," - the identifier for the blockchain network on which the token resides. This helps in distinguishing tokens that may have the same name or symbol but exist on different chains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"decimals"}),": ",e.jsx(n.code,{children:"number"})," - the number of decimal places that the token supports. This value indicates the smallest unit of the token and is crucial for accurate calculations and transactions involving fractional amounts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"logoURL"}),": ",e.jsx(n.code,{children:"string"})," - the URL pointing to the token's logo image. This is used for visual representation in user interfaces, helping users easily identify the token."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"}),": ",e.jsx(n.code,{children:"string"})," - the full name of the token. This is a human-readable representation of the token, providing clarity about its purpose or function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"symbol"}),": ",e.jsx(n.code,{children:"string"})," - the abbreviated symbol of the token, typically consisting of a few letters. This is used for quick identification and trading of the token on exchanges."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"priceUsd"}),": ",e.jsx(n.code,{children:"number"})," - the current price of the token expressed in USD. This value provides users with an understanding of the token's market value and is essential for trading and investment decisions."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ilancachain",children:[e.jsx(n.code,{children:"ILancaChain"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ilancachain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a blockchain chain."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"}),": ",e.jsx(n.code,{children:"string"})," - the unique identifier for the blockchain chain. This ID is used to reference the chain in various operations and configurations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"explorerURL"}),": ",e.jsx(n.code,{children:"string"})," - the URL of the blockchain explorer for the chain. This link allows users to view transactions, blocks, and other on-chain data, providing transparency and insight into the blockchain's activity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"logoURL"}),": ",e.jsx(n.code,{children:"string"})," - the URL pointing to the logo image of the blockchain chain. This is used for branding and visual representation in applications, helping users recognize the chain easily."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"}),": ",e.jsx(n.code,{children:"string"})," - The full name of the blockchain chain. This human-readable name provides context about the chain's purpose, features, or community, making it easier for users to understand its significance."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"itxstep",children:[e.jsx(n.code,{children:"ITxStep"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxstep",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a transaction step."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?"}),": ",e.jsx(n.code,{children:"StepType"})," - transaction step type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"status"}),": ",e.jsx(n.code,{children:"Status"})," - transaction step status"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"txHash?"}),": ",e.jsx(n.code,{children:"Hash"})," - the unique hash of the transaction associated with this step. This property is optional and can be included to provide a reference for users to look up the transaction on a blockchain explorer or to verify its status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error?"}),": ",e.jsx(n.code,{children:"string"})," - a message describing any error that occurred during this transaction step. This property is optional and is particularly useful for debugging and informing users about issues that may have prevented the step from completing successfully."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ifee",children:[e.jsx(n.code,{children:"IFee"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ifee",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a transaction fee."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type"}),": ",e.jsx(n.code,{children:"string"})," - transaction fee type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"amount"}),": ",e.jsx(n.code,{children:"string"})," - transaction fee amount"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"token"}),": ",e.jsx(n.code,{children:"ILancaToken"})," - fee token"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iroutetool",children:[e.jsx(n.code,{children:"IRouteTool"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iroutetool",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a routing tool used for facilitating token swaps or transactions across different decentralized exchanges (DEXs). This interface provides essential information about the tool, enabling users and applications to utilize it effectively for routing transactions."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"}),": ",e.jsx(n.code,{children:"string"})," - the name of the routing tool. This property provides a human-readable identifier for the tool, helping users understand which routing mechanism or service is being utilized."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"amountOutMin?"}),": ",e.jsx(n.code,{children:"string"})," - the minimum output amount expected from the transaction. This property is optional and allows users to set a threshold for the minimum amount of tokens they wish to receive from the swap. Setting this value helps protect users from unfavorable market conditions and slippage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"logoURL"}),": ",e.jsx(n.code,{children:"string"})," - the URL pointing to the logo image of the routing tool. This property is used for visual representation in user interfaces, allowing users to easily identify the tool being used for the transaction."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data?"}),": ",e.jsx(n.code,{children:"object"})," - an object containing additional parameters specific to the routing tool. This property is optional and can include various parameters that are necessary for the tool's operation:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dexRouter"}),": ",e.jsx(n.code,{children:"Address"})," - the address of the DEX router that will facilitate the token swap. This address is crucial for directing the transaction to the correct smart contract on the blockchain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dexCallData"}),": ",e.jsx(n.code,{children:"Hex"})," - the calldata to be sent to the DexSwap contract. This hexadecimal string contains the encoded function call and parameters required for executing the swap on the DEX, ensuring that the transaction is processed correctly."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iswapdirectiondata",children:[e.jsx(n.code,{children:"ISwapDirectionData"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iswapdirectiondata",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing the direction for a token swap. This interface encapsulates the details of the source token and its associated blockchain chain, providing essential information for executing a swap."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"token"}),": ",e.jsx(n.code,{children:"ILancaToken"})," - the source token involved in the swap. This property provides details about the token being exchanged, including its address, symbol, and other relevant attributes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chain"}),": ",e.jsx(n.code,{children:"ILancaChain"})," - the blockchain chain on which the source token resides. This property identifies the network where the token is located, ensuring that the swap is executed on the correct chain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"amount"}),": ",e.jsx(n.code,{children:"string"})," - the amount of the source token to be swapped. This value represents the quantity of tokens that the user intends to exchange, which is crucial for calculating the swap's output."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"irouteinternalstep",children:[e.jsx(n.code,{children:"IRouteInternalStep"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#irouteinternalstep",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing an internal routing step within a transaction process. This interface provides information about the source and destination tokens and chains involved in the routing."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"from"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the source token and chain. This property contains details about the token being swapped and the chain it originates from."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the destination token and chain. This property provides details about the token that will be received after the swap and the chain it will be sent to."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tool"}),": ",e.jsx(n.code,{children:"IRouteTool"})," - the routing tool used for this internal step. This property specifies the mechanism or service that facilitates the swap, including any relevant parameters."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iroutebasestep",children:[e.jsx(n.code,{children:"IRouteBaseStep"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iroutebasestep",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a basic routing step in the transaction process. This interface serves as a foundation for more complex routing steps."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type"}),": ",e.jsx(n.code,{children:"StepType"})," - the type of the routing step. This property categorizes the step within the routing process, providing context about its function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"execution?"}),": ",e.jsx(n.code,{children:"ITxStep"})," - the current state of execution for this step. This property is optional and can be used to track the progress and status of the step, including any errors that may have occurred."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iroutestep",children:[e.jsx(n.code,{children:"IRouteStep"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iroutestep",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An interface representing a routing step that extends ",e.jsx(n.code,{children:"IRouteBaseStep"}),". This interface provides detailed information about the routing process, including the source and destination tokens and any internal steps involved."]}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"from"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the source token and chain. This property contains details about the token being swapped and the chain it originates from."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the destination token and chain. This property provides details about the token that will be received after the swap and the chain it will be sent to."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"internalSteps"}),": ",e.jsx(n.code,{children:"IRouteInternalStep[]"})," - an array of internal routing steps. This property contains the sequence of internal steps that will be executed as part of the routing process, detailing how the swap will be carried out."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fees?"}),": ",e.jsx(n.code,{children:"IFee[]"})," - an array of fee objects associated with this routing step. This property is optional and provides information about the transaction fees that will be incurred during the swap."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"iroutetype",children:[e.jsx(n.code,{children:"IRouteType"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iroutetype",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An interface representing a routing type. This interface encapsulates the overall routing process, including the source and destination tokens and the steps involved in the routing."}),`
`,e.jsx(n.p,{children:"Properties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"from"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the source token and chain. This property contains details about the token being swapped and the chain it originates from."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to"}),": ",e.jsx(n.code,{children:"ISwapDirectionData"})," - information about the destination token and chain. This property provides details about the token that will be received after the swap and the chain it will be sent to."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"steps"}),": ",e.jsx(n.code,{children:"Array<IRouteStep | IRouteBaseStep>"})," - an array of routing steps. This property contains the sequence of steps that will be executed during the routing process, detailing how the swap will be carried out."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"enums",children:["Enums",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enums",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"status",children:[e.jsx(n.code,{children:"Status"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#status",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An enumeration representing the status of a transaction. This enumeration provides a set of predefined values to indicate the current state of a transaction."}),`
`,e.jsx(n.p,{children:"Values"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SUCCESS"})," - indicates that the transaction was successful and completed without issues."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FAILED"})," - indicates that the transaction has failed, typically due to an error or issue during execution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PENDING"})," - indicates that the transaction is currently pending and has not yet been completed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"NOT_STARTED"})," - indicates that the transaction has not yet been initiated."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"steptype",children:[e.jsx(n.code,{children:"StepType"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#steptype",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An enumeration representing the type of a routing step. This enumeration provides predefined values to categorize the various steps involved in the routing process."}),`
`,e.jsx(n.p,{children:"Values"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SRC_SWAP"})," - represents a step for swapping tokens on the source chain. This step involves exchanging the source token for another token within the same blockchain network."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BRIDGE"})," - represents a step for transitioning between chains. This step facilitates the movement of tokens from one blockchain network to another, often involving a bridging mechanism."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DST_SWAP"})," - represents a step for swapping tokens on the destination chain. This step occurs after the tokens have been bridged and involves exchanging the tokens for the desired token on the target blockchain network."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ALLOWANCE"})," - represents a step for setting the allowance for token transfers. This step is necessary when a user needs to grant permission for a smart contract to spend a specified amount of their tokens on their behalf."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SWITCH_CHAIN"})," - represents a step for switching chains. This step indicates that the transaction process involves changing the active blockchain network, which may be necessary for executing certain operations or swaps."]}),`
`]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default,o as frontmatter};
