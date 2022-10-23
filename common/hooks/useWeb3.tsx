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
    console.log('-- called me! connect at the first time')
    connect()
  }, [])

  useEffect(() => {
    console.log('Selected account changed to accs: ', wallet?.address)

    const getBalance = async () => {
      let provider = window.ethereum
      const web3 = new Web3(provider)
      const netWorkId = await web3.eth.net.getId()
      console.log(netWorkId)

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
        // note that this number includes the decimal places (in case of BUSD, that's 18 decimal places)
        // console.log('balance = ', Web3.utils.fromWei(balance))
        setWallet({ ...wallet, busd: Web3.utils.fromWei(balance) })
      }
    }

    getBalance()
  }, [wallet?.address])

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

    // if (wallet) {
    //   const abiJson = [
    //     {
    //       constant: true,
    //       inputs: [{ name: 'who', type: 'address' }],
    //       name: 'balanceOf',
    //       outputs: [{ name: '', type: 'uint256' }],
    //       payable: false,
    //       stateMutability: 'view',
    //       type: 'function',
    //     },
    //   ]
    //   const contract = new web3.eth.Contract(abiJson as any, busdAddress);
    // }

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
