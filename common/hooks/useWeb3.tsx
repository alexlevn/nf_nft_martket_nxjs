import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import {
  SC_ADDRESS,
  SC_MINT_ADDRESS,
  SPENDER_ADDRESS,
  TOTAL_REWARD_ADDRESS,
} from 'constants/index'
import ABI from 'constants/ABI.json'
import ABI_MINT from 'constants/ABI-Mint.json'

export interface IWallet {
  address: string
  bnb?: string
  busd?: string
  asset?: object
}

interface IWeb3Ctx {
  wallet: IWallet | null
  totalReward: string
  allowance: boolean
  connect: () => Promise<void>
  approve: (callback: any) => Promise<void>
  mint: (callback: any) => Promise<void>
  getTotalReward: () => Promise<void>
  logout: () => void
  connected: () => boolean
}

let isInitialied = false

const Web3Context = createContext<IWeb3Ctx>({
  wallet: null,
  totalReward: '',
  allowance: false,
  connect: async () => {},
  approve: async () => {},
  mint: async () => {},
  getTotalReward: async () => {},
  logout: async () => {},
  connected: () => false,
})

export const Web3Provider: FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<IWallet | null>(null)
  const [totalReward, setTotalReward] = useState<string>('0')
  const [allowance, setAllowance] = useState<boolean>(false)

  useEffect(() => {
    /*CONNECT AT START UP*/
    connect()
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

          const contract = new web3.eth.Contract(ABI as AbiItem[], SC_ADDRESS)
          const balance = await contract.methods.balanceOf(holderAddress).call()
          setWallet({ ...wallet, busd: web3.utils.fromWei(balance, 'ether') })
        }
      } catch (err) {
        console.log('Error: ', err)
      }
    }

    getBalance()
  }, [wallet?.address])

  const connect = async () => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(ABI as AbiItem[], SC_ADDRESS)

    if (typeof provider !== 'undefined') {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then(async (accounts: string[]) => {
          setWallet({ address: accounts[0] })

          const res = await nftContract.methods
            .allowance(accounts[0], SPENDER_ADDRESS)
            .call()

          if (Number(res) > 10000) {
            setAllowance(true)
          } else {
            setAllowance(false)
          }
        })
        .catch((err: any) => {
          console.log('Error: ', err)
          return
        })
      window.ethereum.on('accountsChanged', async (accounts: string[]) => {
        setWallet({ address: accounts[0] })

        const res = await nftContract.methods
          .allowance(accounts[0], SPENDER_ADDRESS)
          .call()

        if (Number(res) > 10000) {
          setAllowance(true)
        } else {
          setAllowance(false)
        }
      })
    }

    const netWorkId = await web3.eth.net.getId()
    console.log(netWorkId)

    isInitialied = true
  }

  const logout = () => {
    // USER LOGOUT BY Metamask.
  }

  const approve = async (callback: any) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(ABI as AbiItem[], SC_ADDRESS)

    try {
      const resApprove = await nftContract.methods
        .approve(SPENDER_ADDRESS, 10000000000)
        .send({ from: wallet?.address })

      const resAllowance = await nftContract.methods
        .allowance(wallet?.address, SPENDER_ADDRESS)
        .call()

      if (Number(resAllowance) > 10000) {
        setAllowance(true)
      } else {
        setAllowance(false)
      }
    } catch (err) {
      throw err
    }

    callback()
  }

  const mint = async (callback: any) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(
      ABI_MINT as AbiItem[],
      SC_MINT_ADDRESS,
    )

    const res = await nftContract.methods
      .mintToken()
      .send({ from: wallet?.address })

    callback()
  }

  const getTotalReward = async () => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const balanceRes = await web3.eth.getBalance(TOTAL_REWARD_ADDRESS)

    setTotalReward(web3.utils.fromWei(balanceRes, 'ether'))
  }

  const connected = () => (wallet?.address ? true : false)

  return (
    <Web3Context.Provider
      value={{
        wallet,
        totalReward,
        allowance,
        connect,
        getTotalReward,
        approve,
        mint,
        logout,
        connected,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

const useWeb3 = () => useContext(Web3Context)

export default useWeb3
