import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const MintNFT = () => (
  <div className="flex flex-col gap-5 p-5 lg:p-8  justify-between">
    <div className="flex flex-col gap-5">
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
        <span className="text-white font-semibold text-sm">20% Get Tier1</span>
      </div>
    </div>

    <ButtonBorderGradient className="px-5 py-4 text-center">
      <span>Connect Wallet</span>
    </ButtonBorderGradient>
  </div>
)

export default MintNFT
