/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FC } from 'react'
import MintNFT from 'components/MintNFT'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const Home: FC = () => {
  return (
    <div className="text-xl font-light  bg-dark min-h-screen p-0 flex flex-col gap-5 ">
      {/* REWARD */}

      <div className="bg-pcgray rounded-xl flex flex-col lg:flex-row justify-around p-10 lg:gap-40 gap-2 ">
        <div className="flex flex-col gap-1 justify-center items-start text-left">
          <div className="text-content">Total Reward</div>
          <div className="text-xl lg:text-3xl font-semibold">$8.064.000</div>
          <Image
            src="/images/btn_view_contract.svg"
            alt=""
            height={20}
            width={120}
            className="cursor-pointer mx-auto 100 "
          />
        </div>
        <div className="flex flex-col  gap-1">
          <div className="text-content">Participant</div>
          <div className="text-xl lg:text-3xl font-semibold">40.320</div>
        </div>
      </div>

      {/* HERO IMAGES */}
      <div className="flex flex-col lg:flex-row  justify-between bg-pcgray rounded-md">
        <div className="w-full lg:w-7/12 flex items-center">
          <img
            src="/images/hero_football_2022.png"
            alt=""
            className="rounded-md"
          />
        </div>
        <MintNFT />
      </div>
    </div>
  )
}

export default Home

const a = (
  <div className="text-xl font-light  bg-dark min-h-screen p-0 flex flex-col gap-5">
    <div className="bg-pcgray rounded-xl flex flex-col lg:flex-row justify-around p-10 lg:gap-40 gap-2 ">
      <div className=" gap-2 justify-center">
        <div className="text-content">Total Reward</div>
        <div className="text-xl lg:text-3xl font-semibold">$8.064.000</div>
        <Image
          src="/images/btn_view_contract.svg"
          alt=""
          height={24}
          width={120}
          className="cursor-pointer mx-auto "
        />
      </div>
      <div className="flex flex-col  gap-2">
        <div className="text-content">Participant</div>
        <div className="text-xl lg:text-3xl font-semibold">40.320</div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row  justify-between bg-pcgray rounded-md">
      <img src="/images/hero_football_2022.png" alt="" className="rounded-md" />

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
            <span className="text-white font-semibold text-sm">
              20% Get Tier1
            </span>
          </div>
        </div>
        <ButtonBorderGradient>
          <span className="text-base">Connect Wallet</span>
        </ButtonBorderGradient>
      </div>
    </div>
  </div>
)
