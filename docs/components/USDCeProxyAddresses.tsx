import { useState, useEffect } from 'react'
import { GITHUB_REPOSITORIES, USDCe_PROXY_CONFIG } from '../constants/config'

interface DeploymentAddress {
  network: string
  address: string
  id: string
}

export function USDCeTestnetDeployments() {
  const [addresses, setAddresses] = useState<DeploymentAddress[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDeploymentAddresses = async () => {
      try {
        setIsLoading(true)

        const deploymentFile = GITHUB_REPOSITORIES.USDCe_CONTRACTS.FILES.TESTNET_DEPLOYMENTS
        const deploymentUrl = `${GITHUB_REPOSITORIES.USDCe_CONTRACTS.BASE_URL}${deploymentFile}`

        const response = await fetch(deploymentUrl)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }

        const text = await response.text()
        const parsedAddresses = parseDeploymentAddresses(text)

        setAddresses(parsedAddresses)
      } catch (err) {
        console.error('Error fetching USDCe testnet deployment addresses:', err)
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDeploymentAddresses()
  }, [])

  const parseDeploymentAddresses = (text: string): DeploymentAddress[] => {
    const deploymentAddresses: DeploymentAddress[] = []
    const prefixes = Array.isArray(USDCe_PROXY_CONFIG.VARIABLE_PREFIX)
      ? USDCe_PROXY_CONFIG.VARIABLE_PREFIX
      : [USDCe_PROXY_CONFIG.VARIABLE_PREFIX]

    text.split('\n').forEach(rawLine => {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) return

      const eqIndex = line.indexOf('=')
      if (eqIndex === -1) return

      const key = line.slice(0, eqIndex).trim()
      const address = line.slice(eqIndex + 1).trim()
      if (!address) return

      if (USDCe_PROXY_CONFIG.ADMIN_SUFFIX && key.includes(USDCe_PROXY_CONFIG.ADMIN_SUFFIX)) return

      const matchedPrefix = prefixes.find(prefix => key.startsWith(`${prefix}_`))
      if (!matchedPrefix) return

      const network = key.replace(`${matchedPrefix}_`, '')
      const id = `${network}-${address}`

      deploymentAddresses.push({ network, address, id })
    })

    return deploymentAddresses
  }

  if (isLoading) {
    return <div className="loading">Loading USDCe testnet deployment addresses...</div>
  }

  if (error) {
    return (
      <div className="error-message">
        <p>Error loading USDCe testnet deployment addresses: {error}</p>
        <p>
          Note: If you&apos;re experiencing CORS issues, consider using a CORS proxy or configuring your server to allow cross-origin requests.
        </p>
      </div>
    )
  }

  return (
    <div className="deployment-addresses">
      {addresses.length === 0 ? (
        <p>No USDCe testnet deployment addresses found.</p>
      ) : (
        <div className="table-container">
          <table className="address-table">
            <thead>
              <tr>
                <th>Network</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {addresses.map(item => (
                <tr key={item.id}>
                  <td className="network-name">{item.network}</td>
                  <td className="address-cell">
                    <code>{item.address}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <style>{`
        .deployment-addresses {
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
      `}</style>
    </div>
  )
}

export default USDCeTestnetDeployments
