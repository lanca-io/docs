import{r as a,j as e,u as y}from"./index-LVggQ4zz.js";const v={MESSAGING_CONTRACTS_V2:{BASE_URL:"https://raw.githubusercontent.com/concero/messaging-contracts-v2/refs/heads/master",FILES:{TESTNET_DEPLOYMENTS:"/.env.deployments.testnet",MAINNET_DEPLOYMENTS:"/.env.deployments.mainnet"}},LBF_CONTRACTS:{BASE_URL:"https://raw.githubusercontent.com/lanca-io/lbf-contracts/refs/heads/master",FILES:{TESTNET_DEPLOYMENTS:"/.env.deployments.testnet",MAINNET_DEPLOYMENTS:"/.env.deployments.mainnet"}},RPCS:{SUPPORTED_NETWORKS_URL:"https://raw.githubusercontent.com/concero/rpcs/feature/refactor/output/supported-chains.json"},V2_NETWORKS:{NETWORKS_URL:"https://raw.githubusercontent.com/concero/v2-networks/refs/heads/master/networks"}},l={VARIABLE_PREFIX:["CHILD_POOL_PROXY","PARENT_POOL_PROXY"],ADMIN_SUFFIX:"_ADMIN"};function A({environment:r="testnet"}){const[t,c]=a.useState([]),[u,f]=a.useState(!0),[b,j]=a.useState(null),[L,R]=a.useState(null);a.useEffect(()=>{(async()=>{try{f(!0);const o=r==="testnet"?v.LBF_CONTRACTS.FILES.TESTNET_DEPLOYMENTS:v.LBF_CONTRACTS.FILES.MAINNET_DEPLOYMENTS,x=`${v.LBF_CONTRACTS.BASE_URL}${o}`,d=await fetch(x);if(!d.ok)throw new Error(`Failed to fetch: ${d.status}`);const s=await d.text(),i=w(s);c(i)}catch(o){console.error("Error fetching router addresses:",o),j(o instanceof Error?o.message:"Unknown error occurred")}finally{f(!1)}})()},[r]);const w=n=>{const o=[],x=Array.isArray(l.VARIABLE_PREFIX)?l.VARIABLE_PREFIX:[l.VARIABLE_PREFIX];return n.split(`
`).forEach(d=>{const s=d.trim();if(!s||s.startsWith("#"))return;const i=s.indexOf("=");if(i===-1)return;const h=s.slice(0,i).trim(),p=s.slice(i+1).trim();if(!p||h.includes(l.ADMIN_SUFFIX))return;const m=x.find(_=>h.startsWith(`${_}_`));if(!m)return;const g=h.replace(`${m}_`,""),N=`${g}-${p}`;o.push({network:g,address:p,id:N})}),o};return u?e.jsx("div",{className:"loading",children:"Loading router proxy addresses..."}):b?e.jsxs("div",{className:"error-message",children:[e.jsxs("p",{children:["Error loading router proxy addresses: ",b]}),e.jsx("p",{children:"Note: If you're experiencing CORS issues, you may need to use a CORS proxy or configure your server to allow cross-origin requests."})]}):e.jsxs("div",{className:"router-proxy-addresses",children:[t.length===0?e.jsx("p",{children:"No router proxy addresses found."}):e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"address-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Network"}),e.jsx("th",{children:"Address"})]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs("tr",{children:[e.jsx("td",{className:"network-name",children:n.network}),e.jsx("td",{className:"address-cell",children:e.jsx("div",{className:"address-wrapper",children:e.jsx("code",{children:n.address})})})]},n.id))})]})}),e.jsx("style",{jsx:!0,children:`
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
			`})]})}function S({isOn:r,onToggle:t,onLabel:c="On",offLabel:u="Off"}){return e.jsxs("div",{className:"switch-container",children:[e.jsx("span",{className:r?"inactive-label":"active-label",children:u}),e.jsx("button",{type:"button",role:"switch","aria-checked":r,className:"switch",onClick:()=>t(!r),children:e.jsx("span",{className:"switch-thumb"})}),e.jsx("span",{className:r?"active-label":"inactive-label",children:c}),e.jsx("style",{jsx:!0,children:`
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
					left: ${r?"26px":"2px"};
					width: 20px;
					height: 20px;
					background-color: var(--accent-50);
					border-radius: 50%;
					transition: left 0.2s;
					box-shadow: 0 1px 3px var(--vocs-shadow-color);
				}
			`})]})}function T(){const[r,t]=a.useState("testnet");return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-start",marginBottom:"20px"},children:e.jsx(S,{isOn:r==="mainnet",onToggle:c=>t(c?"mainnet":"testnet"),offLabel:"Testnet",onLabel:"Mainnet"})}),e.jsx(A,{environment:r})]})}const I={title:"Router Deployments",description:"List of all LBF contract addresses"};function E(r){const t={a:"a",div:"div",h1:"h1",header:"header",...y(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"lbf-deployments",children:["LBF Deployments",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lbf-deployments",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,`
`,e.jsx(T,{})]})}function O(r={}){const{wrapper:t}={...y(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(E,{...r})}):E(r)}export{O as default,I as frontmatter};
