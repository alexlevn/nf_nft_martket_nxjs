import { useCallback, useState } from 'react'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'

const MintNFT = () => {
  const { connected, connect, allowance, approve, mint } = useWeb3()
  console.log(allowance);
  
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingMint, setLoadingMint] = useState(false);

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])
  
  const onClickApprove = useCallback(() => {
    approve(callbackApprove)
  }, [approve, callbackApprove])

  const callbackMint = useCallback(() => {
    setLoadingMint(false)
  }, [])

  const onClickMint = useCallback(() => {
    setLoadingMint(true)
    mint(callbackMint)
  }, [mint, callbackMint])

  const renderBtn = useCallback(() => {
    if (connected()) {
      if (allowance) {
        return (
          <ButtonGradient onClick={onClickMint} className="py-2 text-base">
            <span>Mint NFT</span>
          </ButtonGradient>
        )
      } else {
        return (
          <ButtonGradient onClick={onClickApprove} className="py-2 text-base">
            <span>Approve</span>
          </ButtonGradient>
        )
      }
    } else {
      return (
        <ButtonBorderGradient
          className="px-5 py-4 text-center"
          onClick={() => connect()}
        >
          <span>Connect Wallet</span>
        </ButtonBorderGradient>
      )
    }
  }, [allowance, connect, connected, onClickApprove, onClickMint])

  return (
    <div className="w-full lg:w-5/12 flex flex-col gap-5 px-5 py-3  justify-between">
      <div className="flex flex-col gap-3">
        <p className="text-white font-semibold">Mint Your NFT</p>
        <p className="text-content">
          Mint randomly releases NFT shoes to represent the national team
        </p>
        <div className="flex justify-between">
          <span className="text-content">Minted times: </span>
          <span className="text-white font-semibold text-sm">0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-content">Minted rate: </span>
          <span className="text-white font-semibold text-sm">
            20% Get Tier1
          </span>
        </div>
      </div>

      {renderBtn()}
    </div>
  )
}

export default MintNFT
