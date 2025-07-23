import{u as r,j as e}from"./index-Cw2qAlni.js";import{M as n}from"./Math-DKqbB1lV.js";const l={title:"Architecture Overview",description:"High-level view of the LBF architecture — roles, flows, data model."};function a(t){const i={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"lbf-architecture-overview",children:["LBF Architecture Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lbf-architecture-overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"Lanca Bridging Framework is a fully decentralised cross-chain bridging framework enabling seamless value transfer across different blockchain networks."}),`
`,e.jsxs(i.p,{children:["The central ",e.jsx(i.em,{children:"Parent Pool"})," is the primary entry/exit point for liquidity providers (LPs), while ",e.jsx(i.em,{children:"Child Pools"})," provide instant local settlement and application-facing liquidity on their respective chains. Child pool states are periodically reported back to the Parent pool."]}),`
`,e.jsxs(i.p,{children:["Interchain communication is handled by ",e.jsx(i.strong,{children:"Concero V2 Messaging"}),", and periodic operational orchestration (liquidity snapshots, batch withdrawals and deposits) is driven by ",e.jsx(i.strong,{children:"LancaKeeper"}),"."]}),`
`,e.jsxs(i.p,{children:["LBF supports a ",e.jsx(i.strong,{children:"hybrid liquidity management model"}),": an automated planning layer (Parent-assigned targetBalance) is complemented by a market layer — ",e.jsx(i.strong,{children:"Rebalancers"}),", who earn fees by correcting deficits/surpluses through an IOU mechanism."]}),`
`,e.jsxs(i.h2,{id:"architecture-diagram",children:["Architecture Diagram",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-diagram",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"../lbfMainDiagram.png",alt:"lbf"})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Core Components:"})," Parent Pool, Child Pool, LancaBridge (transfer initiator/executor contracts), ConceroRouter (cross-chain message router), ConceroPriceFeed (price oracle), LancaKeeper (automated operator), Rebalancers (market participants performing liquidity balancing)."]}),`
`,e.jsxs(i.h2,{id:"system-components",children:["System Components",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#system-components",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"parent-pool-master-chain",children:["Parent Pool (Master Chain)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parent-pool-master-chain",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Primary liquidity hub: accepts LP deposits, mints LP share tokens proportionate to pool ownership, processes batch withdrawals, and computes dynamic ",e.jsx(i.code,{children:"targetBalance"})," values for all Child Pools."]}),`
`,e.jsx(i.p,{children:"The Parent Pool updates liquidity targets based on network activity and Child pool state reports (metrics + balances). Target distribution instructions are dispatched via Concero V2 Messaging."}),`
`,e.jsxs(i.h3,{id:"child-pool",children:["Child Pool",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#child-pool",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Local liquidity pool on a destination chain: holds funds for immediate settlement of transfers, periodically reports state back to the Parent Pool, and participates in Rebalancer deposit/withdraw (IOU) operations."}),`
`,e.jsxs(i.h3,{id:"lancabridge",children:["LancaBridge",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lancabridge",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Contracts on source and destination chains that users call to initiate cross-chain transfers. They assemble the cross-chain payload, and relay it through the ConceroRouter. On the destination chain, the payload is validated and executed—either disbursing funds to the user or invoking the specified downstream contract."}),`
`,e.jsxs(i.h3,{id:"concerorouter-concero-v2-messaging",children:["ConceroRouter (Concero V2 Messaging)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#concerorouter-concero-v2-messaging",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Secure delivery of cross-chain messages/instructions ensuring Parent↔Child consistency, IOU burn/mint, and interchain contract calls. Cryptographic and economic security properties come from Concero Messaging."}),`
`,e.jsxs(i.h3,{id:"lancakeeper",children:["LancaKeeper",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lancakeeper",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Automated (off-chain + privileged on-chain) operator that:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Triggers periodic Child pool liquidity snapshots;"}),`
`,e.jsx(i.li,{children:"Initiates batch deposits/withdrawals at the Parent Pool;"}),`
`,e.jsx(i.li,{children:"Finalizes withdrawals once consolidated liquidity is available."}),`
`]}),`
`,e.jsxs(i.h3,{id:"rebalancers",children:["Rebalancers",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rebalancers",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Independent actors who monitor pool status (",e.jsx(i.code,{children:"activeLiquidity"})," vs ",e.jsx(i.code,{children:"targetBalance"}),") and quickly fill deficits (deposit) or remove surplus (withdraw) in exchange for ",e.jsx(i.strong,{children:"IOU"})," claims that can later be redeemed from surplus pools (with fee)."]}),`
`,e.jsxs(i.p,{children:["IOU redemption is permitted only from pools operating above their ",e.jsx(i.code,{children:"targetBalance"})," — protecting operational liquidity. If a chosen pool is not in surplus, the Rebalancer must wait or select another pool for redemption."]}),`
`,e.jsxs(i.h2,{id:"operational-flows-in-lbf",children:["Operational Flows in LBF",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#operational-flows-in-lbf",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"1-lp-liquidity-deposit--parent-pool",children:["1. LP Liquidity Deposit → Parent Pool",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-lp-liquidity-deposit--parent-pool",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["An LP sends assets to the Parent Pool → LP share tokens are minted proportionally (see formulas below) → aggregate pool value is updated → ",e.jsx(i.code,{children:"targetBalance"})," values for Child Pools may be adjusted."]}),`
`,e.jsx(i.strong,{children:"LP Share:"}),`
`,e.jsx(n,{input:`$$
\\text{LP Share} = \\frac{\\text{User Deposit}}{\\text{Total Pool Value}} \\times 100\\%
$$`}),`
`,e.jsx(i.strong,{children:"Share Token Mint Formula:"}),`
`,e.jsx(n,{input:`$$
\\text{Share Tokens} =
\\frac{\\text{Deposit Amount} \\times \\text{Current Total Share Tokens}}
{\\text{Current Pool Value}}
$$`}),`
`,e.jsxs(i.h3,{id:"2-user-cross-chain-transfer",children:["2. User Cross-Chain Transfer",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-user-cross-chain-transfer",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["User calls ",e.jsx(i.code,{children:"bridge()"})," on the source-chain LancaBridge."]}),`
`,e.jsx(i.li,{children:"ConceroRouter relays the message to the destination chain."}),`
`,e.jsx(i.li,{children:"Destination LancaBridge verifies the payload and executes payout (EOA or client contract)."}),`
`]}),`
`,e.jsxs(i.h3,{id:"3-real-time-rebalancer-role",children:["3. Real-Time Rebalancer Role",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-real-time-rebalancer-role",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"A Rebalancer detects a Child pool deficit → deposits assets → receives IOU for the deposit amount → transfers IOU to a surplus chain (Concero V2 Messaging burn/mint) → redeems IOU for underlying assets + fee."}),`
`,e.jsxs(i.h3,{id:"4-lp-withdrawal-logic",children:["4. LP Withdrawal Logic",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-lp-withdrawal-logic",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"LP burns LP tokens in the Parent Pool to request withdrawal."}),`
`,e.jsxs(i.li,{children:["The Parent Pool ",e.jsx(i.em,{children:"temporarily raises"})," its ",e.jsx(i.code,{children:"targetBalance"})," by the withdrawal amount, intentionally moving itself into a deficit state — an economic signal to Rebalancers."]}),`
`,e.jsx(i.li,{children:"Rebalancers top up the Parent Pool toward the new target."}),`
`,e.jsx(i.li,{children:"Once actual balance meets target, LancaKeeper finalizes the withdrawal and transfers assets to the LP. Withdrawal time depends on system rebalancing speed, not a hard fixed delay."}),`
`]}),`
`,e.jsxs(i.h2,{id:"hybrid-liquidity-management",children:["Hybrid Liquidity Management",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hybrid-liquidity-management",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The LBF architecture blends ",e.jsx(i.strong,{children:"centralized liquidity target planning"})," (Parent Pool) with ",e.jsx(i.strong,{children:"market-driven reactiveness"})," (Rebalancers), minimizing idle capital while preserving fast local settlement."]}),`
`,e.jsxs(i.h3,{id:"pool-status-variables",children:["Pool Status Variables",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pool-status-variables",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"For each pool the following are tracked:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"balance"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"rebalancingFees"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"activeLiquidity = balance - rebalancingFees"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"targetBalance"})," (dynamic goal set by the Parent Pool)"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Comparing ",e.jsx(i.code,{children:"activeLiquidity"})," to ",e.jsx(i.code,{children:"targetBalance"})," yields one of three states: ",e.jsx(i.strong,{children:"Surplus"}),", ",e.jsx(i.strong,{children:"Balanced"}),", ",e.jsx(i.strong,{children:"Deficit"}),". These states govern which Rebalancer actions are allowed."]}),`
`,e.jsx(n,{input:`$$
\\text{activeLiquidity} = \\text{balance} - \\text{rebalancingFees}
$$`}),`
`,e.jsxs(i.h3,{id:"monitoring-cycle",children:["Monitoring Cycle",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#monitoring-cycle",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The Parent Pool + LancaKeeper collect regular Child pool snapshots and adjust ",e.jsx(i.code,{children:"targetBalance"})," in response to network activity. When a Child Pool drifts from its target, Rebalancers receive an economic signal to act."]}),`
`,e.jsxs(i.h3,{id:"fast-rebalancer-adjustments",children:["Fast Rebalancer Adjustments",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fast-rebalancer-adjustments",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Rebalancers provide a “fast lane” between major Parent pool redistribution cycles: they deposit into deficit pools and withdraw from surplus pools using IOUs. This two-layer approach shortens system response time to load spikes."}),`
`,e.jsxs(i.h3,{id:"iou-redemption-constraint",children:["IOU Redemption Constraint",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iou-redemption-constraint",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["IOU redemption is allowed only if the target pool’s balance exceeds its ",e.jsx(i.code,{children:"targetBalance"}),", protecting operational liquidity and preventing depletion. Without surplus, the Rebalancer must wait or choose another pool."]}),`
`,e.jsx(i.header,{children:e.jsxs(i.h1,{id:"dynamic-liquidity-rebalancing-algorithm",children:["Dynamic Liquidity Rebalancing Algorithm",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dynamic-liquidity-rebalancing-algorithm",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["To optimize capital allocation, the Parent Pool periodically recalculates each Child pool’s ",e.jsx(i.code,{children:"targetBalance"})," using a ",e.jsx(i.strong,{children:"Liquidity Health Score (LHS)"})," that aggregates usage and stress metrics. The objective: move capital from “overfunded” pools to “high-demand” pools while keeping total system liquidity constant."]}),`
`,e.jsxs(i.h2,{id:"metrics",children:["Metrics",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metrics",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"liquidity-utilisation-ratio-lur",children:["Liquidity Utilisation Ratio (LUR)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-utilisation-ratio-lur",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n,{input:`$$
\\text{LUR} = \\frac{\\text{Inflow} + \\text{Outflow}}{\\text{targetBalance}}
$$`}),`
`,e.jsx(i.p,{children:"Measures transaction intensity relative to the pool’s target. Higher volume vs target → higher utilization pressure."}),`
`,e.jsx(i.strong,{children:"Normalization:"}),`
`,e.jsx(n,{input:`$$
\\text{LURScore} = 1 - \\frac{\\text{LUR}}{K + \\text{LUR}}
$$`}),`
`,e.jsx(i.p,{children:"Sensitivity parameter (K) controls how quickly the score falls as activity rises."}),`
`,e.jsxs(i.h3,{id:"net-drain-rate-ndr",children:["Net Drain Rate (NDR)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#net-drain-rate-ndr",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n,{input:`$$
\\text{NDR} = \\frac{\\text{Outflow} - \\text{Inflow}}{\\text{targetBalance}}
$$`}),`
`,e.jsx(i.p,{children:"Positive → net outflow (stress). Zero/negative → stable or net inflow."}),`
`,e.jsx(i.strong,{children:"Score:"}),`
`,e.jsx(n,{input:`$$
\\text{NDRScore} =
\\begin{cases}
1, & \\text{if } \\text{NDR} \\le 0 \\\\
\\max(0, 1 - \\text{NDR}), & \\text{if } \\text{NDR} > 0
\\end{cases}
$$`}),`
`,e.jsxs(i.h3,{id:"liquidity-health-score-lhs",children:["Liquidity Health Score (LHS)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-health-score-lhs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Weighted aggregate of LUR and NDR:"}),`
`,e.jsx(n,{input:`$$
\\text{LHS} = W_1 \\times \\text{LURScore} + W_2 \\times \\text{NDRScore}
$$`}),`
`,e.jsxs(i.h3,{id:"recomputing-targetbalance",children:["Recomputing targetBalance",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#recomputing-targetbalance",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Weighting Function:"}),`
Lower LHS → higher priority for capital allocation. Alpha is a sensitivity constant.`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"Intermediate Pool Weight (W_i):"}),`
`]}),`
`]}),`
`,e.jsx(n,{input:"$$W_i = \\text{Original targetBalance}_i \\times f(\\text{LHS}_i)$$"}),`
`,e.jsxs(i.ol,{start:"3",children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"Normalized Redistribution:"}),`
`]}),`
`]}),`
`,e.jsx(n,{input:"$$\\text{New targetBalance}_i = \\frac{W_i}{\\sum_{j=1}^{N} W_j} \\times \\text{Total Liquidity}$$"}),`
`,e.jsx(i.p,{children:"System-wide liquidity remains constant."}),`
`,e.jsxs(i.h2,{id:"lbf-security",children:["LBF Security",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lbf-security",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The Parent-Child Pool architecture introduces a critical liquidity concentration at the Parent Pool, compromise at this level could cascade across all Child pools, so strict privilege controls and validation are required."}),`
`,e.jsx(i.p,{children:"Reliance on cross-chain communication (Concero V2 Messaging) means message integrity and authenticity are essential to settlement correctness and liquidity flows. Message validation failures could misdirect assets between chains."}),`
`,e.jsxs(i.p,{children:["The IOU burn/mint mechanism is vulnerable to replay attacks unless strict cross-chain message ",e.jsx(i.em,{children:"nonce"})," handling is enforced; reprocessing a valid message could double-mint IOUs and enable economic exploitation."]})]})}function d(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(a,{...t})}):a(t)}export{d as default,l as frontmatter};
