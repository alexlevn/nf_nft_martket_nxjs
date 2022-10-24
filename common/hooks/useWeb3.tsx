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
  bnb?: string
  busd?: string
  asset?: object
}

interface IWeb3Ctx {
  wallet: IWallet | null
  connect: () => Promise<void>
  approve: () => void
  logout: () => void
  connected: () => boolean
}

let isInitialied = false

const Web3Context = createContext<IWeb3Ctx>({
  wallet: null,
  connect: async () => {},
  approve: async () => {},
  logout: async () => {},
  connected: () => false,
})

export const Web3Provider: FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<IWallet | null>(null)

  useEffect(() => {
    // NOT CONNECT AT START UP
    // connect()
  }, [])

  useEffect(() => {
    // console.log('Selected account changed to accs: ', wallet?.address)

    const getBalance = async () => {
      let provider = window.ethereum
      const web3 = new Web3(provider)
      const netWorkId = await web3.eth.net.getId()
      console.log(netWorkId)

      try {
        if (wallet) {
          const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
          const holderAddress = wallet.address

          const abiJson = [
            {
              constant: true,
              inputs: [{ name: 'who', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ name: '', type: 'uint256' }],
              payable: false,
              stateMutability: 'view',
              type: 'function',
            },
          ]
          const contract = new web3.eth.Contract(abiJson as any, busdAddress)
          const balance = await contract.methods.balanceOf(holderAddress).call()
          setWallet({ ...wallet, busd: Web3.utils.fromWei(balance) })
        }
      } catch (err) {
        console.log('Error: ', err)
      }
    }

    getBalance()
  }, [wallet?.address])

  const connect = async () => {
    let provider = window.ethereum
    if (typeof provider !== 'undefined') {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          setWallet({ address: accounts[0] })
        })
        .catch((err: any) => {
          console.log('Error: ', err)
          return
        })
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWallet({ address: accounts[0] })
      })
    }

    const web3 = new Web3(provider)
    const netWorkId = await web3.eth.net.getId()
    console.log(netWorkId)

    isInitialied = true
  }

  const logout = () => {
    // USER LOGOUT BY Metamask.
  }

  const approve = () => {
    // approve to mint
  }

  const connected = () => (wallet?.address ? true : false)

  return (
    <Web3Context.Provider
      value={{ wallet, connect, logout, connected, approve }}
    >
      {children}
    </Web3Context.Provider>
  )
}

const useWeb3 = () => useContext(Web3Context)

export default useWeb3
