import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'

const MintNFT = () => {
  const { connected, connect, approve } = useWeb3()
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

      {connected() ? (
        <ButtonGradient className="py-2 text-base" onClick = {() => approve()} >Approve</ButtonGradient>
      ) : (
        <ButtonBorderGradient
          className="px-5 py-4 text-center"
          onClick={() => connect()}
        >
          <span>Connect Wallet</span>
        </ButtonBorderGradient>
      )}
    </div>
  )
}

export default MintNFT
