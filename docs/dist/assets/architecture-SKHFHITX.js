import{u as r,j as e}from"./index-Cw2qAlni.js";const s={title:"Lanca Bridge Architecture",description:"undefined"};function i(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"lanca-bridge-architecture",children:["Lanca Bridge Architecture",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lanca-bridge-architecture",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The architecture of Lanca Bridge is divided into two main components:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Execution Layer"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Settlement Layer"}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"execution-layer",children:["Execution Layer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-layer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The primary execution layer is built on ",e.jsx(n.strong,{children:"Concero Messaging"}),". This layer handles cross-chain communication by sending messages between Lanca Bridge contracts deployed on different chains. Upon receiving a message on the target chain, the Lanca Bridge contract triggers the associated integrator contract, which then provides liquidity from its pool to fulfill the requested operation."]}),`
`,e.jsxs(n.h2,{id:"settlement-layer",children:["Settlement Layer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settlement-layer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The settlement layer utilizes ",e.jsx(n.strong,{children:"Chainlink CCIP"})," (Cross-Chain Interoperability Protocol). Over time, Lanca Bridge accumulates liquidity on the source chain. Once a certain threshold is reached, the protocol sends this liquidity to the destination chain to replenish the amounts that were allocated during the Execution Layer phase."]}),`
`,e.jsx(n.p,{children:"In cases where an issue occurs during the Execution Layer, the client will still receive their funds once the Settlement Layer is triggered and completes its process on the destination chain. This design ensures that even if cross-chain message execution encounters problems, the protocol’s settlement mechanism will ultimately restore and deliver the correct liquidity on the destination chain. Leveraging Chainlink CCIP for settlement adds a reliable and secure mechanism for transferring liquidity between chains"})]})}function c(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default,s as frontmatter};
