import{r as c,j as e,u as j}from"./index-DvXItYxz.js";const u={MESSAGING_CONTRACTS_V2:{BASE_URL:"https://raw.githubusercontent.com/concero/messaging-contracts-v2/refs/heads/master",FILES:{TESTNET_DEPLOYMENTS:"/.env.deployments.testnet",MAINNET_DEPLOYMENTS:"/.env.deployments.mainnet"}},RPCS:{SUPPORTED_NETWORKS_URL:"https://raw.githubusercontent.com/concero/rpcs/feature/refactor/output/supported-chains.json"},V2_NETWORKS:{NETWORKS_URL:"https://raw.githubusercontent.com/concero/v2-networks/refs/heads/master/networks"}},x={VARIABLE_PREFIX:"CHILD_POOL_PROXY",ADMIN_SUFFIX:"_ADMIN"};function _({environment:o="testnet"}){const[r,d]=c.useState([]),[l,p]=c.useState(!0),[v,y]=c.useState(null),[g,f]=c.useState(null);c.useEffect(()=>{(async()=>{try{p(!0);const t=o==="testnet"?u.MESSAGING_CONTRACTS_V2.FILES.TESTNET_DEPLOYMENTS:u.MESSAGING_CONTRACTS_V2.FILES.MAINNET_DEPLOYMENTS,n=`${u.MESSAGING_CONTRACTS_V2.BASE_URL}${t}`;console.log(n);const a=await fetch(n);if(!a.ok)throw new Error(`Failed to fetch: ${a.status}`);const h=await a.text(),i=w(h);d(i)}catch(t){console.error("Error fetching router addresses:",t),y(t instanceof Error?t.message:"Unknown error occurred")}finally{p(!1)}})()},[o]);const w=s=>{const t=[];return s.split(`
`).forEach(n=>{if(n.includes(x.VARIABLE_PREFIX)&&!n.includes(x.ADMIN_SUFFIX)){const a=n.split("=");if(a.length===2){const h=a[0].trim(),i=a[1].trim(),b=h.replace(`${x.VARIABLE_PREFIX}_`,""),R=`${b}-${i}`;t.push({network:b,address:i,id:R})}}}),t},E=async(s,t)=>{try{await navigator.clipboard.writeText(s),f(t),setTimeout(()=>f(null),2e3)}catch(n){console.error("Failed to copy:",n)}},N=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),k=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})});return l?e.jsx("div",{className:"loading",children:"Loading router proxy addresses..."}):v?e.jsxs("div",{className:"error-message",children:[e.jsxs("p",{children:["Error loading router proxy addresses: ",v]}),e.jsx("p",{children:"Note: If you're experiencing CORS issues, you may need to use a CORS proxy or configure your server to allow cross-origin requests."})]}):e.jsxs("div",{className:"router-proxy-addresses",children:[e.jsxs("h2",{children:["Router Proxy Addresses - ",o]}),r.length===0?e.jsx("p",{children:"No router proxy addresses found."}):e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"address-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Network"}),e.jsx("th",{children:"Address"})]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"network-name",children:s.network}),e.jsx("td",{className:"address-cell",children:e.jsxs("div",{className:"address-wrapper",children:[e.jsx("code",{children:s.address}),e.jsx("button",{className:`copy-icon-button ${g===s.id?"copied":""}`,onClick:()=>E(s.address,s.id),title:"Copy address to clipboard","aria-label":"Copy address",children:g===s.id?e.jsx(k,{}):e.jsx(N,{})})]})})]},s.id))})]})}),e.jsx("style",{jsx:!0,children:`
				.router-proxy-addresses {
					margin: 20px 0;
					font-family: var(--vocs-font-sans);

				}
				.table-container {
					overflow-x: auto;
				}
				.address-table {
					width: 100%;
					border-collapse: collapse;
					margin-top: 15px;
					box-shadow: 0 1px 3px var(--vocs-shadow-color);
					border-radius: 5px;
					overflow: hidden;

				}
				.address-table thead {
					background-color: var(--vocs-background-subtle);
					
				}
				.address-table th {
					font-weight: 300;
					color: var(--vocs-foreground);
					text-align: left;
					border-bottom: 1px solid var(--vocs-border-color);
					padding: 12px 15px;
				}
				.address-table td {
					padding: 12px 15px;
					text-align: left;
					border-bottom: 1px solid var(--vocs-border-color);
					font-size: 14px;

				}
				.address-table tbody tr:hover {
					background-color: var(--vocs-background-hover);
				}
				.network-name {
					font-weight: 400;
					color: var(--vocs-foreground);
				}
				.address-cell {
					font-family: var(--vocs-font-mono);
					word-break: break-all;
				}
				.address-wrapper {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 10px;
				}
				.copy-icon-button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 28px;
					height: 28px;
					border: none;
					border-radius: 4px;
					background-color: var(--vocs-color_backgroundAccent);
					color: var(--vocs-color_textAccent);
					cursor: pointer;
					transition: all 0.2s ease;
					flex-shrink: 0;
				}
				.copy-icon-button:hover {
					background-color: var(--vocs-color_backgroundAccentHover);
					color: var(--vocs-color_textAccentHover);
				}
				.copy-icon-button.copied {
					background-color: var(--accent-600);
					color: var(--accent-100);
				}
				.loading,
				.error-message {
					padding: 15px;
					border-radius: 5px;
				}
				.loading {
					background-color: var(--vocs-color_borderAccent);
					color: var(--vocs-color_textAccent);
				}
				.error-message {
					background-color: var(--vocs-error-background);
					color: var(--vocs-error-text);
					border-left: 4px solid var(--vocs-error-text);
				}
			`})]})}function S({isOn:o,onToggle:r,onLabel:d="On",offLabel:l="Off"}){return e.jsxs("div",{className:"switch-container",children:[e.jsx("span",{className:o?"inactive-label":"active-label",children:l}),e.jsx("button",{type:"button",role:"switch","aria-checked":o,className:"switch",onClick:()=>r(!o),children:e.jsx("span",{className:"switch-thumb"})}),e.jsx("span",{className:o?"active-label":"inactive-label",children:d}),e.jsx("style",{jsx:!0,children:`
				.switch-container {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.active-label {
					color: var(--vocs-color_textAccent);
					font-weight: normal;
				}

				.inactive-label {
					color: var(--vocs-foreground);
					font-weight: normal;
				}

				.switch {
					position: relative;
					display: inline-block;
					width: 48px;
					height: 24px;
					background-color: var(--accent-600);
					border-radius: 12px;
					cursor: pointer;

					border: none;
				}

				.switch-thumb {
					position: absolute;
					top: 2px;
					left: ${o?"26px":"2px"};
					width: 20px;
					height: 20px;
					background-color: var(--accent-50);
					border-radius: 50%;
					transition: left 0.2s;
					box-shadow: 0 1px 3px var(--vocs-shadow-color);
				}
			`})]})}function A(){const[o,r]=c.useState("testnet");return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:e.jsx(S,{isOn:o==="mainnet",onToggle:d=>r(d?"mainnet":"testnet"),offLabel:"Testnet",onLabel:"Mainnet"})}),e.jsx(_,{environment:o})]})}const I={title:"Router Deployments",description:"List of all CONCERO_ROUTER_PROXY addresses"};function m(o){const r={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...j(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.header,{children:e.jsxs(r.h1,{id:"router-deployments",children:["Router Deployments",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#router-deployments",children:e.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(r.p,{children:`This page lists all CONCERO_ROUTER_PROXY addresses from our deployment configuration.
Use the toggle switch to view addresses for testnet or mainnet environments.`}),`
`,`
`,e.jsx(A,{}),`
`,e.jsxs(r.h2,{id:"using-router-proxies",children:["Using Router Proxies",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-router-proxies",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"To use these router proxies in your contracts, you'll need to:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:"Import the required interfaces"}),`
`,e.jsx(r.li,{children:"Initialize the router with the appropriate address for your network"}),`
`,e.jsx(r.li,{children:"Call the router's messaging functions"}),`
`]})]})}function C(o={}){const{wrapper:r}={...j(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(m,{...o})}):m(o)}export{C as default,I as frontmatter};
