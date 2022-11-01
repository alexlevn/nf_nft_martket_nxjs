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
  WC_NFT_ADDRESS,
  SPENDER_ADDRESS,
  TOTAL_REWARD_ADDRESS,
  MARKET_ADDRESS,
} from 'constants/index'
import ABI from 'constants/ABI.json'
import WC_NFT_ABI from 'constants/wc-nft-abi.json'
import MARTKET_ABI from 'constants/market-abi.json'

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
  mint: (callback: any, ref: string) => Promise<void>
  getTotalReward: () => Promise<void>
  checkApproved: (tokenId: string, callback: any) => Promise<void>
  approveToken: (tokenId: string, callback: any) => Promise<void>
  sellToken: (tokenId: string, tokenAddress: string, price: number, callback: any) => Promise<void>
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
  checkApproved: async () => {},
  approveToken: async () => {},
  sellToken: async () => {},
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

  const mint = async (callback: any, ref: string) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(
      WC_NFT_ABI as AbiItem[],
      WC_NFT_ADDRESS,
    )

    try {
      if (ref && ref !== wallet?.address) {
        const res = await nftContract.methods
        .mintTokenWithRef(ref)
        .send({ from: wallet?.address })
        
        callback(res.events.itemGenerated.returnValues)
      } else {
        const res = await nftContract.methods
        .mintToken()
        .send({ from: wallet?.address })
  
        callback(res.events.itemGenerated.returnValues)
      }
    } catch (error) {
      throw error
    }
  }

  const getTotalReward = async () => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const balanceRes = await web3.eth.getBalance(TOTAL_REWARD_ADDRESS)

    setTotalReward(web3.utils.fromWei(balanceRes, 'ether'))
  }

  const checkApproved = async (tokenId: string, callback: any) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(
      WC_NFT_ABI as AbiItem[],
      WC_NFT_ADDRESS,
    )

    try {
      const res = await nftContract.methods
        .getApproved(Number(tokenId))
        .call()
      
      if (res === MARKET_ADDRESS) {
        callback(true)
      } else {
        callback(false)
      }
    } catch (error) {
      throw error
    }
  }

  const approveToken = async (tokenId: string, callback: any) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(
      WC_NFT_ABI as AbiItem[],
      WC_NFT_ADDRESS,
    )

    try {
      await nftContract.methods
        .approve(MARKET_ADDRESS, tokenId)
        .send({ from: wallet?.address})

      checkApproved(tokenId, callback)
    } catch (error) {
      throw error
    }
  }

  const sellToken = async (tokenId: string, tokenAddress: string, price: number, callback: any) => {
    let provider = window.ethereum
    const web3 = new Web3(provider)
    const nftContract = new web3.eth.Contract(
      MARTKET_ABI as AbiItem[],
      MARKET_ADDRESS,
    )

    try {
      await nftContract.methods
        .listToken(tokenAddress, Number(tokenId), price)
        .send({ from: wallet?.address})
        
      callback()
    } catch (error) {
      throw error
    }
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
        checkApproved,
        approve,
        mint,
        approveToken,
        sellToken,
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
