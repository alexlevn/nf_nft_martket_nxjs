import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import Web3 from 'web3'

export interface IWallet {
  address: string
  busd?: number
  asset?: object
}

interface IWeb3Ctx {
  wallet: IWallet | null
  connect: () => Promise<void>
  logout: () => void
}

// let selectedAccount
let isInitialied = false

const Web3Context = createContext<IWeb3Ctx>({
  wallet: null,
  connect: async () => {},
  logout: async () => {},
})

export const Web3Provider: FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<IWallet | null>(null)

  useEffect(() => {
    console.log('Selected account changed to accs: ', wallet?.address)
  }, [wallet])

  const connect = async () => {
    let provider = window.ethereum

    if (typeof provider !== 'undefined') {
      provider
        .request({
          method: 'eth_requestAccounts',
        })
        .then((accounts: string[]) => {
          setWallet({ address: accounts[0] })
          // selectedAccount = accounts[0]
          console.log('accs = ', accounts)
          // console.log('Selected account: ', accounts[0])
        })
        .catch((err: any) => {
          console.log('Error: ', err)
          return
        })

      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWallet({ address: accounts[0] })
        // selectedAccount = accounts[0]
        // console.log('Selected account changed to accs: ', selectedAccount)
      })
    }

    const web3 = new Web3(provider)
    const netWorkId = await web3.eth.net.getId()
    console.log(netWorkId)
    isInitialied = true
  }
  const logout = () => {
    // TODO:
    // console.log('disconnect wallet ---')
  }

  return (
    <Web3Context.Provider value={{ wallet, connect, logout }}>
      {children}
    </Web3Context.Provider>
  )
}

const useWeb3 = () => useContext(Web3Context)

export default useWeb3
